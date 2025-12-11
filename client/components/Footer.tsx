export default function Footer() {
  return (
    <footer
      className="w-full py-10 md:py-16 text-white relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 300">
          <circle cx="150" cy="50" r="2" fill="white" opacity="0.6" />
          <circle cx="300" cy="100" r="1.5" fill="white" opacity="0.4" />
          <circle cx="500" cy="80" r="2.5" fill="white" opacity="0.5" />
          <circle cx="800" cy="150" r="2" fill="white" opacity="0.6" />
          <circle cx="1000" cy="100" r="1.5" fill="white" opacity="0.4" />
          <circle cx="200" cy="250" r="2" fill="white" opacity="0.5" />
          <circle cx="950" cy="230" r="1.5" fill="white" opacity="0.6" />

          <line
            x1="150"
            y1="50"
            x2="300"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <line
            x1="300"
            y1="100"
            x2="500"
            y2="80"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <line
            x1="800"
            y1="150"
            x2="1000"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center border-t border-white/20 pt-8">
          <p className="text-base md:text-lg font-sans leading-relaxed">
            Obrigado por celebrar este momento e apoiar a educação!{" "}
            <span className="block mt-2 font-serif font-semibold text-lg">
              Carlos Borges
            </span>
          </p>

          <div className="mt-6 flex gap-3 text-xs text-gray-400">
            <span>★</span>
            <span>Astrofísica</span>
            <span>★</span>
            <span>Física</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
