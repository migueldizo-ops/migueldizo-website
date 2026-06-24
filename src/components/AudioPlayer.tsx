"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  soundcloudUrl: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SC: any;
  }
}

// One track playing at a time across all instances
let activeWidget: any = null;

function formatMs(ms: number): string {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function AudioPlayer({ soundcloudUrl }: AudioPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("—");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function initWidget() {
      if (cancelled || !iframeRef.current) return;
      const widget = window.SC.Widget(iframeRef.current);
      widgetRef.current = widget;

      widget.bind(window.SC.Widget.Events.READY, () => {
        if (cancelled) return;
        setReady(true);
        widget.getDuration((d: number) => {
          if (!cancelled) setDuration(formatMs(d));
        });
      });

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        if (!cancelled) setPlaying(true);
      });

      widget.bind(window.SC.Widget.Events.PAUSE, () => {
        if (!cancelled) setPlaying(false);
      });

      widget.bind(window.SC.Widget.Events.FINISH, () => {
        if (!cancelled) {
          setPlaying(false);
          setProgress(0);
        }
      });

      widget.bind(
        window.SC.Widget.Events.PLAY_PROGRESS,
        (e: { relativePosition: number }) => {
          if (!cancelled) setProgress(e.relativePosition);
        }
      );
    }

    if (typeof window !== "undefined" && window.SC) {
      initWidget();
    } else {
      const interval = setInterval(() => {
        if (window.SC) {
          clearInterval(interval);
          initWidget();
        }
      }, 100);
      return () => {
        cancelled = true;
        clearInterval(interval);
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  function handleToggle() {
    if (!widgetRef.current || !ready) return;

    if (playing) {
      widgetRef.current.pause();
    } else {
      if (activeWidget && activeWidget !== widgetRef.current) {
        activeWidget.pause();
      }
      activeWidget = widgetRef.current;
      widgetRef.current.play();
    }
  }

  const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    soundcloudUrl
  )}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;

  return (
    <div className="mt-5">
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        allow="autoplay"
        title="SoundCloud Player"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          left: "-9999px",
          top: "-9999px",
        }}
      />

      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          aria-label={playing ? "Pause" : "Play"}
          disabled={!ready}
          className="flex-shrink-0 w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-dark hover:border-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
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
            <span className="text-cream/60 text-xs font-sans truncate">
              {playing ? "Now playing" : "Preview"}
            </span>
            <span className="text-cream/35 text-xs font-sans ml-3 flex-shrink-0 tabular-nums">
              {duration}
            </span>
          </div>
          <div className="h-px bg-cream/10 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-[width] duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
