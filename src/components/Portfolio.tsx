import AudioPlayer from "./AudioPlayer";

const PROJECTS = [
  {
    number: "01",
    title: "Eternal Ascent",
    genre: "Epic Orchestral",
    track: "Main Theme — Full Orchestra",
    duration: "3:24",
    description:
      "Feature film score blending 80-piece orchestra with synthetic textures for a sweeping science fiction epic.",
  },
  {
    number: "02",
    title: "Neon Labyrinth",
    genre: "Game OST",
    track: "Opening Sequence",
    duration: "4:12",
    description:
      "Adaptive game soundtrack fusing cyberpunk synths with live guitar for an action RPG set in a dystopian city.",
  },
  {
    number: "03",
    title: "The Weight of Silence",
    genre: "TV Drama",
    track: "End Credits",
    duration: "2:58",
    description:
      "Intimate chamber score for a six-part limited series exploring grief and memory through solo piano and strings.",
  },
  {
    number: "04",
    title: "Golden Hour",
    genre: "Brand · Commercial",
    track: "Full Mix",
    duration: "1:47",
    description:
      "Warm, aspirational brand piece for a global lifestyle campaign — acoustic guitar, pizzicato strings, and soft brass.",
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
        {PROJECTS.map((project) => (
          <article
            key={project.number}
            className="group bg-dark p-8 lg:p-10 relative overflow-hidden cursor-pointer hover:bg-[#111113] transition-colors duration-300"
          >
            {/* Hover accent bar */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />

            <div className="flex items-start justify-between mb-6">
              <span className="font-display text-7xl font-light text-cream/[0.06] leading-none select-none">
                {project.number}
              </span>
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-accent/70 font-sans mt-2">
                {project.genre}
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-light text-cream mb-3 leading-tight">
              {project.title}
            </h3>

            <p className="text-cream/45 text-sm font-sans leading-relaxed mb-2">
              {project.description}
            </p>

            <AudioPlayer track={project.track} duration={project.duration} />
          </article>
        ))}
      </div>
    </section>
  );
}
