import AudioPlayer from "./AudioPlayer";

const TRACKS = [
  {
    number: "01",
    title: "Cosmic Mirage",
    genre: "Hybrid Trailer",
    soundcloudUrl: "https://soundcloud.com/ormadz/cosmic-mirage",
  },
  {
    number: "02",
    title: "Welcome to the Future",
    genre: "Orchestral Hybrid Game Music",
    soundcloudUrl: "https://soundcloud.com/ormadz/welcome-to-the-future",
  },
  {
    number: "03",
    title: "The Space Between Us",
    genre: "Romance & Drama — Film and TV",
    soundcloudUrl: "https://soundcloud.com/ormadz/the-space-between-us",
  },
  {
    number: "04",
    title: "Wrath of Anansi",
    genre: "Rock Hybrid Trailer",
    soundcloudUrl: "https://soundcloud.com/ormadz/wrath-of-anansi",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mb-16">
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
          Selected Work
        </p>
        <h2 className="font-display font-light text-5xl md:text-6xl text-cream">
          Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
        {TRACKS.map((track) => (
          <article
            key={track.number}
            className="group bg-dark p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />

            <div className="flex items-start justify-between mb-6">
              <span className="font-display text-7xl font-light text-cream/[0.06] leading-none select-none">
                {track.number}
              </span>
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-accent/70 font-sans mt-2">
                {track.genre}
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-light text-cream leading-tight">
              {track.title}
            </h3>

            <AudioPlayer soundcloudUrl={track.soundcloudUrl} />
          </article>
        ))}
      </div>
    </section>
  );
}
