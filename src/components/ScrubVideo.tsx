import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks/useInView'

const SENSITIVITY = 0.8

export default function ScrubVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetTime = useRef(0)
  const seeking = useRef(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return // reduced motion: video stays on its first frame
    let prevX: number | null = null

    const move = (x: number) => {
      const video = videoRef.current
      if (!video || !video.duration || Number.isNaN(video.duration)) return
      if (prevX === null) {
        prevX = x
        return
      }
      const delta = x - prevX
      prevX = x
      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTime.current = Math.min(Math.max(targetTime.current + offset, 0), video.duration)

      if (!seeking.current) {
        seeking.current = true
        video.currentTime = targetTime.current
      }
    }

    const onMouse = (e: MouseEvent) => move(e.clientX)
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) move(e.touches[0].clientX)
    }
    const onTouchEnd = () => {
      prevX = null
    }

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  const handleSeeked = () => {
    const video = videoRef.current
    if (!video) return
    if (Math.abs(video.currentTime - targetTime.current) > 0.01) {
      video.currentTime = targetTime.current
    } else {
      seeking.current = false
    }
  }

  return (
    <>
      {/* Always rendered underneath: it is the whole background if the video is blocked or slow. */}
      <div aria-hidden className="bg-fallback fixed inset-0 z-0" />
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        aria-hidden
        onSeeked={handleSeeked}
        onLoadedData={() => setReady(true)}
        onError={() => setReady(false)}
        className="fixed inset-0 z-0 h-full w-full object-cover transition-opacity duration-700"
        style={{ objectPosition: '70% center', opacity: ready ? 1 : 0 }}
      />
    </>
  )
}
