import { config } from '../config'
import { CountUp, ExternalLink, Reveal, Section } from './ui'

export function Program() {
  const p = config.program
  return (
    <Section id="program" eyebrow="New · Training program" title="Next up: hands-on AI talent training.">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-white/[0.14] to-white/[0.03] p-6 sm:p-12">
          <span className="mb-6 inline-block rounded-full bg-white px-4 py-1 text-[13px] text-black sm:text-sm">
            {p.status}
          </span>
          <h3
            className="mb-2 text-[clamp(26px,5vw,56px)] leading-[1.08] tracking-tight text-white"
            lang="vi"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.viName}
          </h3>
          <p className="mb-8 text-[clamp(18px,2.6vw,28px)] text-white/80">{p.enName}</p>
          <p className="text-[18px] text-white sm:text-[22px]">{p.org}</p>
          <p className="mt-1 text-sm text-white/60 sm:text-base">{p.orgFull}</p>
          <p className="mt-8 text-xs text-white/40">{p.enNote}</p>
        </div>
      </Reveal>
    </Section>
  )
}

export function Research() {
  const r = config.research
  return (
    <Section id="research" eyebrow="Research" title="Auditing LLM safety in Vietnamese.">
      <Reveal>
        <div className="grid gap-8 rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 text-sm text-white/50">
              {r.role} · {r.venue} · {r.status}
            </p>
            <h3 className="mb-5 max-w-3xl text-[clamp(22px,3.4vw,36px)] leading-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              “{r.title}”
            </h3>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">{r.blurb}</p>
          </div>
          <div className="md:text-right">
            <div className="text-[clamp(48px,9vw,96px)] leading-none text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              <CountUp value={r.stat.value} suffix={r.stat.suffix} />
            </div>
            <div className="mt-2 text-sm text-white/60">{r.stat.label}</div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & stack" title="Tools I reach for.">
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        {config.skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 70}>
            <h3 className="mb-4 border-b border-white/15 pb-3 text-[20px] text-white sm:text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-white/10 px-3 py-1 text-[13px] text-white/90 sm:text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Certifications & education" title="Learning, formally and otherwise.">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="mb-5 text-[20px] text-white sm:text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Certifications
          </h3>
          <ul className="divide-y divide-white/10">
            {config.certifications.map((c) => (
              <li key={c.name} className="py-3">
                <div className="text-white">{c.name}</div>
                <div className="text-sm text-white/50">{c.by}</div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <h3 className="mb-5 text-[20px] text-white sm:text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Education
          </h3>
          <ul className="divide-y divide-white/10">
            {config.education.map((e) => (
              <li key={e.school} className="py-3">
                <div className="flex flex-wrap justify-between gap-x-4 text-white">
                  <span>{e.school}</span>
                  <span className="text-white/50">{e.period}</span>
                </div>
                <div className="text-white/80">{e.degree}</div>
                {e.note && <div className="text-sm text-white/50">{e.note}</div>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-16 px-5 pb-10 pt-20 sm:px-8 sm:pt-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-[13px] uppercase tracking-[0.2em] text-white/50 sm:text-sm">Contact</p>
          <a
            href={`mailto:${config.email}`}
            className="link-underline break-all text-[clamp(26px,6.4vw,76px)] leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {config.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-lg text-white sm:text-xl">
            <ExternalLink href={config.github} className="link-underline">
              github.com/doquoc188
            </ExternalLink>
            <span className="text-white/60">{config.location}</span>
          </div>
        </Reveal>
        <p className="mt-20 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} {config.name}
        </p>
      </div>
    </footer>
  )
}
