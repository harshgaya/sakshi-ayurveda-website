"use client";

import { useRef, useState } from "react";

export default function VideoTestimonial({
  name,
  condition,
  quote,
  color = "#c98b69",
  videoUrl,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current || !videoUrl) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <article className="overflow-hidden rounded-[1.5rem] bg-white leaf-shadow">
      <div
        className="relative aspect-[9/16] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}, #254a38)` }}
      >
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            preload="metadata"
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}

        {!playing && (
          <div className="absolute inset-0 grid place-items-center text-center text-white">
            <div>
              <span className="block text-5xl">❋</span>
              <p className="serif mt-3 text-xl">Patient story</p>
            </div>
          </div>
        )}

        <button
          onClick={toggleVideo}
          className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#254a38] shadow-lg"
          aria-label={
            playing ? "Pause testimonial video" : "Play testimonial video"
          }
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
      </div>

      <div className="p-5">
        <p className="serif text-lg">{name}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#bf7253]">
          {condition}
        </p>
        <p className="mt-3 text-sm leading-6 text-[#52685a]">“{quote}”</p>
      </div>
    </article>
  );
}
