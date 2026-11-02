import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrubVideo from './components/ScrubVideo'
import Projects from './components/Projects'
import { Contact, Credentials, Program, Research, Skills } from './components/Sections'
import { config } from './config'

function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return <div ref={bar} aria-hidden className="fixed left-0 top-0 z-20 h-[2px] w-full origin-left scale-x-0 bg-white" />
}

export default function App() {
  return (
    <main className="relative min-h-screen bg-black">
      <ScrollProgress />
      <ScrubVideo src={config.videoSrc} />
      <Navbar />
      <Hero />
      {/* The video is fixed behind everything: a blurred dark panel keeps text readable. */}
      <div className="relative z-[1] bg-black/80 backdrop-blur-xl">
        <Projects />
        <Program />
        <Research />
        <Skills />
        <Credentials />
        <Contact />
      </div>
    </main>
  )
}
