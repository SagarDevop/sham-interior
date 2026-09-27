import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    /* Full-width cinematic photo band as shown directly below Services in the reference */
    <section id="video" className="w-full relative">
      <div className="relative w-full h-[240px] sm:h-[360px] md:h-[480px] lg:h-[580px] overflow-hidden group">
        {/* Cinematic Architectural Staircase & Panoramic Interior */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural staircase with natural daylight"
          className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 brightness-[0.95]"
        />

        {/* Subtle ambient lighting layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

        {/* Centered Circular Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            aria-label="Play Architectural Studio Tour"
            className="w-13 h-13 sm:w-18 sm:h-18 rounded-full bg-white/85 hover:bg-white backdrop-blur-md flex items-center justify-center shadow-[0_6px_24px_rgba(0,0,0,0.18)] border border-white/60 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Play className="w-5 h-5 sm:w-7 sm:h-7 text-[#2C2523] fill-[#2C2523] translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Architectural Studio Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
