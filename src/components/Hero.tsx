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
    <section
      className="flex flex-col px-6 lg:px-12 max-w-7xl mx-auto"
      style={{ position: "relative", minHeight: "88vh" }}
    >
      {/* Eyebrow — clean #0e0e10, no video */}
      <div className="pt-28 pb-8" style={{ position: "relative", zIndex: 10 }}>
        <p className="text-accent text-xs tracking-[0.22em] uppercase font-sans">
          Composer &amp; Music Producer &nbsp;—&nbsp; Film · TV · Games · Trailers · Indie Artists · Bands · Content Creators
        </p>
      </div>

      {/* Video zone — headline, subtitle, buttons only */}
      <div style={{ position: "relative", overflow: "hidden", flex: 1 }}>

        {/* Video */}
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

        {/* Overlay */}
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

        {/* Top fade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to bottom, #0e0e10, transparent)",
            zIndex: 2,
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, #0e0e10, transparent)",
            zIndex: 2,
          }}
        />

        {/* Headline, subtitle, buttons */}
        <div style={{ position: "relative", zIndex: 10, padding: "48px 0" }}>
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

          <div className="flex flex-wrap gap-4">
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
        </div>

      </div>

      {/* Tag pills — clean #0e0e10, no video */}
      <div className="pt-8 pb-16" style={{ position: "relative", zIndex: 10 }}>
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
