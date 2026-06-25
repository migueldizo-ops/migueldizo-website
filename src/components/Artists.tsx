import Image from "next/image";

const ARTISTS = [
  {
    name: "Shades of Native",
    photo: "https://i.scdn.co/image/ab6761610000e5eb52422cde40e896e0df94845a",
    role: "Producer & Mixing",
    spotifyUrl: "https://open.spotify.com/artist/0nmqWXpvFKgYPgy5mixlon",
  },
  {
    name: "Ringmeister",
    photo: "https://i.scdn.co/image/ab67616d0000b273f195066a36afd2867b1262c7",
    role: "Producer & Mixing",
    spotifyUrl: "https://open.spotify.com/artist/5k3NBuSC2sZuzqaDCTkEeg",
  },
  {
    name: "Behold the Locus",
    photo: "https://i.scdn.co/image/ab67616d0000b273feb480b28f641c060ba101f3",
    role: "Producer & Mixing",
    spotifyUrl: "https://open.spotify.com/artist/61V4outEguMN1YJH8UfxTG",
  },
];

export default function Artists() {
  return (
    <section
      id="artists"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[rgba(255,255,255,0.06)]"
    >
      <div className="mb-16">
        <p className="text-accent text-xs tracking-[0.22em] uppercase mb-4 font-sans">
          Collaborations
        </p>
        <h2 className="font-display font-light text-5xl md:text-6xl text-cream mb-6">
          Artists I&apos;ve worked with
        </h2>
        <p className="text-cream/45 text-sm font-sans max-w-xl leading-relaxed">
          Production, mixing, and mastering for independent artists across Pop,
          Rock, Indie, and OPM.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTISTS.map((artist) => (
          <article
            key={artist.name}
            className="border border-[rgba(255,255,255,0.08)] hover:border-[rgba(167,139,202,0.3)] transition-colors duration-300"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artist.photo}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 bg-dark">
              <h3 className="font-display text-[22px] font-light text-cream leading-tight mb-1">
                {artist.name}
              </h3>
              <p className="text-cream/40 text-[0.65rem] tracking-[0.18em] uppercase font-sans mb-4">
                {artist.role}
              </p>
              <a
                href={artist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent text-xs font-sans hover:text-[#b89fd6] transition-colors duration-200"
              >
                Listen on Spotify
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
