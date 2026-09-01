const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const previewPath = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/dune-simple-concepts-preview.png";

// Concept 1: The Three Flowing Dune Ridges (Directly inspired by DuneField canvas)
// 3 sweeping, undulating dune curves inside a circle with gold lines
const concept1Svg = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleClip1">
      <circle cx="400" cy="400" r="340" />
    </clipPath>
    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E5AB" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="400" cy="400" r="340" fill="#0C1322" stroke="url(#goldGrad1)" stroke-width="14" />

  <g clip-path="url(#circleClip1)">
    <!-- Dune Layer 1 (Back) -->
    <path d="M 0, 420 Q 240, 360 460, 410 T 800, 380 L 800, 800 L 0, 800 Z" fill="#141D2E" />
    <path d="M 0, 420 Q 240, 360 460, 410 T 800, 380" fill="none" stroke="url(#goldGrad1)" stroke-width="6" stroke-opacity="0.4" />

    <!-- Dune Layer 2 (Middle) -->
    <path d="M 0, 500 Q 280, 440 520, 510 T 800, 470 L 800, 800 L 0, 800 Z" fill="#1B263B" />
    <path d="M 0, 500 Q 280, 440 520, 510 T 800, 470" fill="none" stroke="url(#goldGrad1)" stroke-width="8" stroke-opacity="0.7" />

    <!-- Dune Layer 3 (Foreground Crest) -->
    <path d="M 0, 600 Q 220, 540 480, 610 T 800, 570 L 800, 800 L 0, 800 Z" fill="#24334E" />
    <path d="M 0, 600 Q 220, 540 480, 610 T 800, 570" fill="none" stroke="url(#goldGrad1)" stroke-width="12" />
  </g>
</svg>`;

// Concept 2: Minimalist Linear Sine Dune Waves (Clean Japanese / Swiss Line Geometry)
const concept2Svg = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleClip2">
      <circle cx="400" cy="400" r="340" />
    </clipPath>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8B7" />
      <stop offset="100%" stop-color="#C99D4E" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="400" cy="400" r="340" fill="#0C1322" stroke="url(#goldGrad2)" stroke-width="14" />

  <g clip-path="url(#circleClip2)">
    <!-- 4 Pure Minimalist Wave Lines -->
    <path d="M -50, 310 C 180, 270 260, 350 480, 320 S 720, 280 850, 310" fill="none" stroke="url(#goldGrad2)" stroke-width="10" stroke-linecap="round" />
    <path d="M -50, 410 C 140, 360 290, 460 510, 410 S 710, 360 850, 400" fill="none" stroke="url(#goldGrad2)" stroke-width="12" stroke-linecap="round" />
    <path d="M -50, 510 C 160, 450 310, 570 540, 510 S 740, 460 850, 500" fill="none" stroke="url(#goldGrad2)" stroke-width="14" stroke-linecap="round" />
    <path d="M -50, 610 C 150, 560 300, 660 520, 610 S 730, 560 850, 600" fill="none" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" />
  </g>
</svg>`;

// Concept 3: The Ascending Barchan Dune Arc (Clean architectural sweeping crest + sovereign pip)
const concept3Svg = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleClip3">
      <circle cx="400" cy="400" r="340" />
    </clipPath>
    <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8B7" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#C59B3F" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="400" cy="400" r="340" fill="#0C1322" stroke="url(#goldGrad3)" stroke-width="14" />

  <g clip-path="url(#circleClip3)">
    <!-- Minimalist Sun/Sovereign Point -->
    <circle cx="530" cy="260" r="28" fill="url(#goldGrad3)" />

    <!-- Two sweeping dynamic sand dunes -->
    <!-- Dune 1 -->
    <path d="M -50, 520 C 150, 360 400, 460 850, 340 L 850, 850 L -50, 850 Z" fill="#162238" />
    <path d="M -50, 520 C 150, 360 400, 460 850, 340" fill="none" stroke="url(#goldGrad3)" stroke-width="12" />

    <!-- Dune 2 (Foreground) -->
    <path d="M -50, 640 C 250, 540 500, 660 850, 500 L 850, 850 L -50, 850 Z" fill="#20304C" />
    <path d="M -50, 640 C 250, 540 500, 660 850, 500" fill="none" stroke="url(#goldGrad3)" stroke-width="16" />
  </g>
</svg>`;

async function renderComparison() {
  const comparisonSvg = `<svg width="1800" height="680" viewBox="0 0 1800 680" xmlns="http://www.w3.org/2000/svg">
    <!-- Dark Slate Background matching Dune Strategy -->
    <rect width="1800" height="680" fill="#060A12" />

    <!-- Concept 1 -->
    <g transform="translate(60, 40) scale(0.68)">
      ${concept1Svg}
    </g>
    <text x="330" y="630" font-family="system-ui, sans-serif" font-size="22" fill="#E2E8F0" text-anchor="middle" font-weight="600">Option 1: Layered Ridge Waves</text>
    <text x="330" y="655" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Layered shaded dune bodies + gold crest lines</text>

    <!-- Concept 2 -->
    <g transform="translate(640, 40) scale(0.68)">
      ${concept2Svg}
    </g>
    <text x="910" y="630" font-family="system-ui, sans-serif" font-size="22" fill="#E2E8F0" text-anchor="middle" font-weight="600">Option 2: Pure Minimalist Wave Lines</text>
    <text x="910" y="655" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Four clean undulating gold sand waves</text>

    <!-- Concept 3 -->
    <g transform="translate(1220, 40) scale(0.68)">
      ${concept3Svg}
    </g>
    <text x="1490" y="630" font-family="system-ui, sans-serif" font-size="22" fill="#E2E8F0" text-anchor="middle" font-weight="600">Option 3: Sweeping Dune Crests + Sun</text>
    <text x="1490" y="655" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Two bold sweeping crests with gold sovereign point</text>
  </svg>`;

  await sharp(Buffer.from(comparisonSvg)).png().toFile(previewPath);
  console.log("Dune concepts comparison rendered successfully to:", previewPath);
}

renderComparison().catch(console.error);
