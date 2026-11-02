import { useEffect, useRef, useState } from 'react'
import { config } from '../config'
import { prefersReducedMotion } from '../hooks/useInView'
import { useTypewriter } from '../hooks/useTypewriter'

const pillBase =
  'inline-flex items-center justify-center rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap'

export default function Hero() {
  const { displayed, done } = useTypewriter(config.typewriter, 38, 600)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowButtons(true), 400)
    return () => clearTimeout(t)
  }, [])

  const [copied, setCopied] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  // The whole text block leans toward the cursor in 3D (mouse only, off for reduced motion).
  useEffect(() => {
    if (prefersReducedMotion()) return
    const lean = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || !box.current) return
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      box.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 7}deg)`
    }
    window.addEventListener('pointermove', lean)
    return () => window.removeEventListener('pointermove', lean)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${config.email}` // clipboard blocked: fall back to opening the mail app
    }
  }

  return (
    <section className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
      <div
        ref={box}
        className="relative z-10 max-w-xl transition-transform duration-300 ease-out"
        style={{ transformOrigin: '0% 50%' }}
      >
        <div
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
          }}
        >
          {config.intro[0]}
          <br />
          {config.intro[1]}
        </div>

        <p
          className="mb-5 text-white sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: 54,
          }}
          aria-label={config.typewriter}
        >
          {displayed}
          {!done && (
            <span
              className="ml-[2px] inline-block h-[1.1em] w-[2px] bg-white align-middle"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          )}
        </p>

        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: showButtons ? 1 : 0,
            transform: showButtons ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {config.pills.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              {...(pill.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              className={`${pillBase} border border-black/10 bg-white text-black transition-colors duration-200 hover:bg-black hover:text-white`}
            >
              {pill.label}
            </a>
          ))}

          <button
            type="button"
            onClick={copyEmail}
            className={`${pillBase} cursor-pointer gap-2 border border-white bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3`}
          >
            <span aria-live="polite">
              {copied ? (
                'Copied'
              ) : (
                <>
                  Reach me: <span className="underline underline-offset-1">{config.email}</span>
                </>
              )}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="4" y="4" width="7" height="7" rx="1" />
              <rect x="1" y="1" width="7" height="7" rx="1" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
