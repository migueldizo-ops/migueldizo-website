const VIDEOS = [
  {
    id: "dE3Qs_Zf4DY",
    title: "I Catch You",
    description: "Original Score · Short Film Top 10 Finalist",
  },
  {
    id: "BjEQbFqT2Oc",
    title: "Tenet Car Chase",
    description: "Audio Rescore Challenge",
  },
  {
    id: "2fDDyG8NhA4",
    title: "Primordial Witt",
    description: "Original Score & Sound Design · Student Short Film",
  },
];

export default function Videos() {
  const [featured, ...secondary] = VIDEOS;

  return (
    <section
      id="videos"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mb-16">
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
          On screen
        </p>
        <h2 className="font-display font-light text-5xl md:text-6xl text-cream">
          Featured Videos
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <div className="group">
          <div className="relative aspect-video overflow-hidden border border-transparent group-hover:border-[#a78bca66] transition-colors duration-300">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-display text-2xl md:text-3xl font-light text-cream leading-tight">
              {featured.title}
            </h3>
            <p className="text-cream/45 text-sm font-sans mt-1">
              {featured.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondary.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video overflow-hidden border border-transparent group-hover:border-[#a78bca66] transition-colors duration-300">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl md:text-2xl font-light text-cream leading-tight">
                  {video.title}
                </h3>
                <p className="text-cream/45 text-sm font-sans mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
