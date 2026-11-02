import { useEffect, useState } from 'react'
import { config } from '../config'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Past the hero, give the nav a blurred backdrop so it never overlaps content text.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-10 flex w-full items-center justify-between px-5 py-4 transition-colors duration-300 sm:px-8 sm:py-5 ${
          scrolled && !open ? 'bg-black/70 backdrop-blur-md' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {config.brand}®
          </span>
          <span
            className="select-none text-[25px] text-white sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        <div className="hidden text-[23px] text-white md:flex">
          {config.navLinks.map((link, i) => (
            <span key={link.label}>
              <a href={link.href} className="link-underline">
                {link.label}
              </a>
              {i < config.navLinks.length - 1 && <span className="whitespace-pre">, </span>}
            </span>
          ))}
        </div>

        <a
          href={config.cta.href}
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:block"        >
          {config.cta.label}
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        {config.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-[32px] font-medium text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href={config.cta.href}
          onClick={() => setOpen(false)}
          className="text-[32px] font-medium text-white underline"
        >
          {config.cta.label}
        </a>
      </div>
    </>
  )
}
