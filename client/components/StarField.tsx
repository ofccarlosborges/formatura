import { useEffect, useRef } from "react";

export default function StarField() {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starFieldRef.current) return;

    const container = starFieldRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Limpar stars anteriores
    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random();
      let starSize = "small";

      if (size > 0.8) starSize = "large";
      else if (size > 0.5) starSize = "medium";

      star.className = `star ${starSize}`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDelay = `${Math.random() * 3}s`;

      container.appendChild(star);
    }
  }, []);

  return (
    <div
      ref={starFieldRef}
      className="absolute inset-0 star-field pointer-events-none"
    />
  );
}
