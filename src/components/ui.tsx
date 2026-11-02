import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { prefersReducedMotion, useInView } from '../hooks/useInView'

// Fade + slide-up on scroll. `delay` (ms) staggers siblings.
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12)
  return (
    <div ref={ref} data-in={inView} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// Card that tilts in 3D toward the pointer, with a moving glare. Children with
// translateZ float above the card. Mouse only, and off for reduced motion.
export function Tilt({ children, className = '', max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLElement>(null)

  const move = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || prefersReducedMotion() || e.pointerType !== 'mouse') return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <article
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`tilt relative [transform-style:preserve-3d] transition-[transform,border-color] duration-200 ${className}`}
    >
      <div aria-hidden className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit]" />
      {children}
    </article>
  )
}

// Counts from 0 to `value` once the number scrolls into view.
export function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5)
  const [n, setN] = useState(prefersReducedMotion() ? value : 0)

  useEffect(() => {
    if (!inView || prefersReducedMotion()) {
      if (inView) setN(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setN(value * (1 - Math.pow(1 - t, 3))) // ease-out cubic
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/50 sm:text-sm">{eyebrow}</p>
          <h2
            className="mb-10 max-w-4xl text-[clamp(30px,6vw,64px)] leading-[1.05] tracking-tight text-white sm:mb-14"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export const ExternalLink = ({
  href,
  children,
  className = '',
  style,
}: {
  href: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    className={className}
    style={style}
  >
    {children}
  </a>
)
