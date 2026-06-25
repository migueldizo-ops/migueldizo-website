const SERVICES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: "Film / TV / Game Scoring",
    description:
      "Original cinematic scores for film, TV, and games — plus full production for indie artists, bands, and content creators across Rock, Pop, OPM, and beyond.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
    title: "Vocal Production & Songwriting",
    description:
      "Co-writing, topline melodies, and vocal arrangement for sync-ready releases and commercial placements.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h2v12H3zM7 3h2v18H7zM11 8h2v8h-2zM15 5h2v14h-2zM19 9h2v6h-2z" />
      </svg>
    ),
    title: "Mixing & Mastering",
    description:
      "Polished, broadcast-ready mixes built for streaming, sync, and theatrical delivery formats.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
        <path d="M17.5 2.5a2.121 2.121 0 013 3L12 14l-4 1 1-4 8.5-8.5z" />
      </svg>
    ),
    title: "Jingles & Brand Audio",
    description:
      "Memorable sonic identities for campaigns, product launches, podcasts, and broadcast commercials.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="8" width="20" height="10" rx="2" />
        <path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
        <line x1="12" y1="12" x2="12" y2="14" />
      </svg>
    ),
    title: "Personal Commissions",
    description:
      "Custom pieces for weddings, events, tributes, and personal projects — composed to your exact brief.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Let's Talk Scope",
    description:
      "Have an unusual project or ongoing collaboration in mind? Reach out and let's build something together.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mb-16">
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
          What I Do
        </p>
        <h2 className="font-display font-light text-5xl md:text-6xl text-cream">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-dark p-8 lg:p-10 group hover:bg-[#111113] transition-colors duration-300"
          >
            <div className="text-accent/70 mb-6 group-hover:text-accent transition-colors duration-200">
              {service.icon}
            </div>
            <h3 className="font-display text-xl font-light text-cream mb-3 leading-snug">
              {service.title}
            </h3>
            <p className="text-cream/45 text-sm font-sans leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
