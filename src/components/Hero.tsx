const TAGS = [
  "Rock · Metal",
  "Pop · OPM · Indie",
  "Film & TV Scoring",
  "Game Soundtracks",
  "Mixing & Mastering",
  "Lo-fi · Ambient · R&B · Hip-Hop",
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center">
      {/* Bounded video zone: below eyebrow, above tag pills */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          bottom: "120px",
          left: 0,
          right: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain bg-[#0e0e10]"
        >
          <source src="/Reel.mp4" type="video/mp4" />
        </video>

        {/* Overlay confined to the video zone */}
        <div className="absolute inset-0 bg-[rgba(14,14,16,0.85)] md:bg-[rgba(14,14,16,0.75)]" />

        {/* Gradient fades at the edges of the video zone */}
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#0e0e10] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#0e0e10] to-transparent" />
      </div>

      {/* Content — above the video zone */}
      <div className="relative px-6 lg:px-12 max-w-7xl mx-auto w-full pt-28 pb-24 flex flex-col justify-center" style={{ zIndex: 10 }}>
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-8 font-sans">
          Composer &amp; Music Producer &nbsp;—&nbsp; Film · TV · Games · Trailers · Indie Artists · Bands · Content Creators
        </p>

        <h1 className="font-display font-light text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.93] text-cream mb-8 max-w-5xl">
          Turning{" "}
          <em className="italic text-accent not-italic" style={{ fontStyle: "italic" }}>
            Ideas
          </em>{" "}
          into Sound
        </h1>

        <p className="text-cream/55 text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-sans">
          From cinematic film scores and game soundtracks to indie artist production
          and band recordings — I turn your ideas into professional, polished sound.
          Rock, Pop, OPM, Orchestral, and beyond.
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
      </div>
    </section>
  );
}
