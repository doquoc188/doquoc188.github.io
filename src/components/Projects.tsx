import { config, type Project } from '../config'
import { CountUp, ExternalLink, Reveal, Section, Tilt } from './ui'

const btn =
  'inline-flex items-center rounded-full px-5 py-2 text-[14px] sm:text-[15px] transition-colors duration-200'

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal delay={80}>
      <Tilt className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 hover:border-white/40 sm:p-10">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-white/50">
          <span className="text-sm">0{index + 1}</span>
          <span className="text-sm">{p.date}</span>
        </div>
        <h3
          className="mb-3 text-[clamp(26px,4.5vw,48px)] leading-[1.08] tracking-tight text-white [transform:translateZ(36px)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {p.title}
        </h3>
        <p className="mb-8 max-w-2xl text-[18px] text-white/80 sm:text-[22px]">{p.pitch}</p>

        <dl className="mb-8 grid grid-cols-2 gap-3 [transform:translateZ(26px)] lg:grid-cols-4">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl bg-white/[0.07] px-4 py-4">
              <dd
                className="text-[clamp(22px,3.4vw,36px)] leading-none text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <CountUp {...m} />
              </dd>
              <dt className="mt-2 text-[12px] leading-snug text-white/60 sm:text-[13px]">{m.label}</dt>
            </div>
          ))}
        </dl>

        <ul className="mb-8 grid gap-2 text-[15px] leading-relaxed text-white/70 sm:text-base md:grid-cols-2 md:gap-x-10">
          {p.details.map((d) => (
            <li key={d} className="flex gap-3">
              <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-white/60" />
              {d}
            </li>
          ))}
        </ul>

        <ul className="mb-8 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-[12px] text-white/80 sm:text-[13px]">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 [transform:translateZ(30px)]">
          <ExternalLink href={p.github} className={`${btn} bg-white text-black hover:bg-black hover:text-white hover:ring-1 hover:ring-white`}>
            GitHub ↗
          </ExternalLink>
          {p.demo && (
            <ExternalLink href={p.demo} className={`${btn} border border-white text-white hover:bg-white hover:text-black`}>
              Live demo ↗
            </ExternalLink>
          )}
        </div>
      </Tilt>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Systems I build, then measure.">
      <div className="flex flex-col gap-6 sm:gap-8">
        {config.projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
