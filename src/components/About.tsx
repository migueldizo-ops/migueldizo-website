import Image from "next/image";

const STATS = [
  { value: "8+", label: "Years producing" },
  { value: "5", label: "Projects completed" },
  { value: "2", label: "Games scored" },
  { value: "∞", label: "Commissions welcome" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[rgba(255,255,255,0.06)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] items-stretch">

        {/* Left — content */}
        <div className="py-24 px-6 lg:px-12 lg:pr-16">
          <div className="mb-16">
            <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
              The Composer
            </p>
            <h2 className="font-display font-light text-5xl md:text-6xl text-cream">
              About
            </h2>
          </div>

          <blockquote className="font-display italic text-2xl md:text-3xl text-cream/80 leading-snug mb-10 border-l-2 border-accent pl-6">
            "Huh, That&apos;ll Work."
          </blockquote>

          <p className="text-cream/55 text-sm font-sans leading-relaxed mb-12">
            Born in Dubai, raised by music. Miguel Dizo is a composer and music
            producer now based in the Philippines, with a degree in Music
            Theory, Arrangement, and Production from Silliman University. His
            work spans film scoring, game soundtracks, VTuber productions,
            mixing, mastering, and sound design — built across genres from Rock
            and Metal to Orchestral, Lo-fi, and EDM. Working in FL Studio, he
            brings technical precision and creative flexibility to every
            project, whether it&apos;s a full cinematic soundtrack or a single
            polished track.
          </p>

          <div className="grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
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

        {/* Right — cinematic portrait */}
        <div className="relative hidden lg:block min-h-[600px]">
          <Image
            src="/miguel.jpg"
            alt="Miguel Dizo"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 1280px) 400px, 460px"
            priority
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark/90 to-transparent" />
        </div>

      </div>
    </section>
  );
}
