const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15c2.5-1 5.5-1 8 0" />
        <path d="M7 11.5c3-1.5 6.5-1.5 10 0" />
        <path d="M6.5 8.5c3.5-1.5 7.5-1.5 11 0" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg text-cream/60 hover:text-cream transition-colors duration-200 tracking-wide"
        >
          Miguel Dizo
        </a>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream/35 hover:text-accent transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-cream/30 text-xs font-sans tracking-wider">
          © {new Date().getFullYear()} Miguel Dizo
        </p>
      </div>
    </footer>
  );
}
