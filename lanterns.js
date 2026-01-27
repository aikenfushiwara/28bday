// ===============================
// Lantern Transition – Tangled Style
// ===============================

const container = document.getElementById("lantern-transition");

// -------------------------------
// Lantern SVG Factory
// -------------------------------
function createLanternSVG(sizeClass) {
  const lantern = document.createElement("div");
  lantern.className = `lantern ${sizeClass}`;

  lantern.innerHTML = `
    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow-${Math.random()}" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stop-color="#fff8d6"/>
          <stop offset="65%" stop-color="#ffbe55"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
      </defs>

      <!-- Inner glow -->
      <ellipse cx="30" cy="55" rx="18" ry="30" fill="url(#glow-${Math.random()})"/>

      <!-- Paper body -->
      <rect
        x="14"
        y="18"
        width="32"
        height="64"
        rx="14"
        fill="rgba(255, 215, 150, 0.85)"
        stroke="rgba(255, 245, 210, 0.6)"
        stroke-width="1"
      />

      <!-- Top rim -->
      <ellipse
        cx="30"
        cy="18"
        rx="16"
        ry="4"
        fill="rgba(255, 190, 110, 0.9)"
      />

      <!-- Bottom rim -->
      <ellipse
        cx="30"
        cy="82"
        rx="16"
        ry="4"
        fill="rgba(255, 170, 90, 0.9)"
      />
    </svg>
  `;

  return lantern;
}

// -------------------------------
// Parallax Lantern Layers
// -------------------------------
const layers = [
  { count: 18, size: "small", speed: 9 },
  { count: 14, size: "medium", speed: 6 },
  { count: 8, size: "large", speed: 4 }
];

layers.forEach(layer => {
  for (let i = 0; i < layer.count; i++) {
    const lantern = createLanternSVG(layer.size);

    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const drift = Math.random() * 80 - 40;
    const duration = layer.speed + Math.random() * 2;

    lantern.style.left = `${left}%`;
    lantern.style.animationDuration = `${duration}s`;
    lantern.style.animationDelay = `${delay}s`;
    lantern.style.setProperty("--drift", `${drift}px`);

    container.appendChild(lantern);
  }
});

// -------------------------------
// Golden Sparkles
// -------------------------------
const sparkleCount = 70;

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";
  sparkle.style.animationDelay = Math.random() * 3 + "s";

  container.appendChild(sparkle);
}

// -------------------------------
// Auto Cleanup (optional)
// -------------------------------
setTimeout(() => {
  container.remove();
}, 9000);
