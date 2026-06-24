"use client";

import { useState } from "react";

interface AudioPlayerProps {
  track: string;
  duration: string;
}

export default function AudioPlayer({ track, duration }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex items-center gap-3 mt-5 group/player">
      <button
        onClick={() => setPlaying((v) => !v)}
        aria-label={playing ? "Pause" : "Play"}
        className="flex-shrink-0 w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-dark hover:border-accent transition-all duration-200"
      >
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <rect x="1" y="1" width="3.5" height="10" rx="0.5" />
            <rect x="7.5" y="1" width="3.5" height="10" rx="0.5" />
          </svg>
        ) : (
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="currentColor"
            style={{ marginLeft: "1px" }}
          >
            <path d="M1 1.5L10 6L1 10.5V1.5Z" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-cream/60 text-xs font-sans truncate">{track}</span>
          <span className="text-cream/35 text-xs font-sans ml-3 flex-shrink-0 tabular-nums">
            {duration}
          </span>
        </div>
        <div className="h-px bg-cream/10 rounded-full relative overflow-hidden">
          <div
            className={`h-full bg-accent/50 rounded-full transition-all duration-700 ${
              playing ? "w-2/5" : "w-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
