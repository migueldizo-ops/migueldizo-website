const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8 yrs", label: "Professional Experience" },
  { value: "200k+", label: "Streams Worldwide" },
  { value: "20+", label: "Countries Reached" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mb-16">
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
          The Composer
        </p>
        <h2 className="font-display font-light text-5xl md:text-6xl text-cream">
          About
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — quote + bio */}
        <div>
          <blockquote className="font-display italic text-2xl md:text-3xl text-cream/80 leading-snug mb-10 border-l-2 border-accent pl-6">
            "I believe every story deserves a sound that makes it{" "}
            <span className="text-accent">unforgettable.</span>"
          </blockquote>

          <div className="space-y-5 text-cream/55 text-sm font-sans leading-relaxed">
            <p>
              Miguel Dizo is a Manila-born, Los Angeles-based composer and music
              producer specialising in cinematic scoring across film, television,
              and interactive media. With a background rooted in both classical
              conservatory training and modern electronic production, his work
              sits at the intersection of orchestral tradition and contemporary
              sound design.
            </p>
            <p>
              He has contributed music to documentaries, festival short films,
              mobile games, and advertising campaigns for brands across Asia,
              Europe, and North America. His process is deeply collaborative —
              starting every project with the picture and story before a single
              note is written.
            </p>
            <p>
              When not in the studio, Miguel teaches composition masterclasses
              and mentors emerging composers through the Southeast Asian
              Film Music Initiative.
            </p>
          </div>
        </div>

        {/* Right — stat boxes */}
        <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)] self-start">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-dark p-8 flex flex-col gap-2">
              <span className="font-display text-5xl font-light text-cream leading-none">
                {stat.value}
              </span>
              <span className="text-cream/40 text-xs font-sans tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
