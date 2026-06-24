const TAGS = [
  "Orchestral",
  "Electronic",
  "Cinematic",
  "Hybrid Score",
  "Sound Design",
  "Adaptive Music",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto pt-28 pb-24">
      <p className="text-accent text-xs tracking-[0.22em] uppercase mb-8 font-sans">
        Composer &amp; Music Producer &nbsp;—&nbsp; Film · TV · Video Games
      </p>

      <h1 className="font-display font-light text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.93] text-cream mb-8 max-w-5xl">
        Music that{" "}
        <em className="italic text-accent not-italic" style={{ fontStyle: "italic" }}>
          moves
        </em>{" "}
        the scene.
      </h1>

      <p className="text-cream/55 text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-sans">
        I craft cinematic scores and immersive soundscapes for films, TV series,
        and video games — building emotional depth from first frame to final
        note.
      </p>

      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href="#work"
          className="px-8 py-4 bg-accent text-dark text-xs font-sans font-semibold tracking-[0.12em] uppercase hover:bg-[#b89fd6] transition-colors duration-200"
        >
          Listen to my work
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border border-cream/20 text-cream text-xs font-sans tracking-[0.12em] uppercase hover:border-cream/50 hover:text-cream transition-colors duration-200"
        >
          Let&apos;s collaborate
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 border border-cream/[0.09] text-cream/35 text-[0.65rem] tracking-[0.18em] uppercase font-sans"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
