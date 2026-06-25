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
    <section style={{ position: "relative", minHeight: "88vh" }}>

      {/* 1. Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <source src="/Reel.mp4" type="video/mp4" />
      </video>

      {/* 2. Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(14, 14, 16, 0.72)",
          zIndex: 1,
        }}
      />

      {/* 3. Top gradient fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(to bottom, #0e0e10 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* 4. Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(to top, #0e0e10 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* 5. Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "80px 48px 60px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
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
