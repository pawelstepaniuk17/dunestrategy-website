const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const baseDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/dunestrategy-website";
const publicDir = path.join(baseDir, "public");
const assetsDir = path.join(baseDir, "src/assets");
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const brainDir = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb";

// Concept 1: Layered Ridge Waves (Ascending shaded dune bodies + gold crest lines)
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <defs>
    <clipPath id="circleClip1">
      <circle cx="512" cy="512" r="460" />
    </clipPath>
    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8B7" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#A87B15" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="512" cy="512" r="460" fill="#0C1322" stroke="url(#goldGrad1)" stroke-width="20" />

  <g clip-path="url(#circleClip1)">
    <!-- Dune Layer 1 (Back) -->
    <path d="M -50, 540 Q 280, 460 560, 520 T 1100, 480 L 1100, 1100 L -50, 1100 Z" fill="#141E30" />
    <path d="M -50, 540 Q 280, 460 560, 520 T 1100, 480" fill="none" stroke="url(#goldGrad1)" stroke-width="8" stroke-opacity="0.45" />

    <!-- Dune Layer 2 (Middle) -->
    <path d="M -50, 650 Q 320, 570 640, 650 T 1100, 600 L 1100, 1100 L -50, 1100 Z" fill="#1C2B44" />
    <path d="M -50, 650 Q 320, 570 640, 650 T 1100, 600" fill="none" stroke="url(#goldGrad1)" stroke-width="12" stroke-opacity="0.75" />

    <!-- Dune Layer 3 (Foreground Crest) -->
    <path d="M -50, 780 Q 260, 700 600, 780 T 1100, 730 L 1100, 1100 L -50, 1100 Z" fill="#263A5C" />
    <path d="M -50, 780 Q 260, 700 600, 780 T 1100, 730" fill="none" stroke="url(#goldGrad1)" stroke-width="16" />
  </g>
</svg>`;

// Concept 2: Pure Minimalist Wave Lines (Four clean undulating gold sand waves)
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <defs>
    <clipPath id="circleClip2">
      <circle cx="512" cy="512" r="460" />
    </clipPath>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8B7" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="512" cy="512" r="460" fill="#0C1322" stroke="url(#goldGrad2)" stroke-width="20" />

  <g clip-path="url(#circleClip2)">
    <!-- 4 Pure Minimalist Wave Lines -->
    <path d="M -50, 390 C 220, 340 340, 440 610, 400 S 910, 350 1100, 390" fill="none" stroke="url(#goldGrad2)" stroke-width="14" stroke-linecap="round" />
    <path d="M -50, 520 C 180, 460 380, 580 650, 520 S 900, 460 1100, 510" fill="none" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" />
    <path d="M -50, 650 C 200, 580 390, 720 680, 650 S 940, 590 1100, 640" fill="none" stroke="url(#goldGrad2)" stroke-width="18" stroke-linecap="round" />
    <path d="M -50, 780 C 190, 720 380, 840 660, 780 S 930, 720 1100, 770" fill="none" stroke="url(#goldGrad2)" stroke-width="20" stroke-linecap="round" />
  </g>
</svg>`;

// Concept 3: Sweeping Dune Crests + Sovereign Point (Two bold crests with gold celestial dot)
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <defs>
    <clipPath id="circleClip3">
      <circle cx="512" cy="512" r="460" />
    </clipPath>
    <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E8B7" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  <!-- Outer Circle Rim -->
  <circle cx="512" cy="512" r="460" fill="#0C1322" stroke="url(#goldGrad3)" stroke-width="20" />

  <g clip-path="url(#circleClip3)">
    <!-- Minimalist Sovereign Point -->
    <circle cx="680" cy="320" r="36" fill="url(#goldGrad3)" />

    <!-- Dune 1 -->
    <path d="M -50, 660 C 200, 460 520, 590 1100, 430 L 1100, 1100 L -50, 1100 Z" fill="#18253D" />
    <path d="M -50, 660 C 200, 460 520, 590 1100, 430" fill="none" stroke="url(#goldGrad3)" stroke-width="16" />

    <!-- Dune 2 (Foreground) -->
    <path d="M -50, 820 C 320, 690 640, 840 1100, 640 L 1100, 1100 L -50, 1100 Z" fill="#24375A" />
    <path d="M -50, 820 C 320, 690 640, 840 1100, 640" fill="none" stroke="url(#goldGrad3)" stroke-width="20" />
  </g>
</svg>`;

async function exportAll() {
  console.log("Exporting all 3 Dune Strategy concepts...");

  fs.mkdirSync(exportedDir, { recursive: true });
  fs.mkdirSync(path.join(publicDir, "logos"), { recursive: true });

  const concepts = [
    { id: "concept1", name: "dune-strategy-concept1-layered", svg: svg1 },
    { id: "concept2", name: "dune-strategy-concept2-lines", svg: svg2 },
    { id: "concept3", name: "dune-strategy-concept3-crest", svg: svg3 },
  ];

  for (const c of concepts) {
    const svgBuf = Buffer.from(c.svg);
    // 1. Save SVG
    fs.writeFileSync(path.join(publicDir, `logos/${c.id}.svg`), c.svg);

    // 2. Export 2K Master PNG
    const png2k = await sharp(svgBuf).resize(2048, 2048).png({ compressionLevel: 9 }).toBuffer();
    fs.writeFileSync(path.join(exportedDir, `${c.name}-2k.png`), png2k);
    fs.writeFileSync(path.join(brainDir, `${c.name}-2k.png`), png2k);
    console.log(`Saved 2K PNG for ${c.name}`);
  }

  // Set Concept 1 (Layered Ridge Waves) as the default active website logo & favicon
  // (cleanly matches the hero canvas animation)
  fs.writeFileSync(path.join(publicDir, "logo.svg"), svg1);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg1);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svg1);

  const default2k = fs.readFileSync(path.join(exportedDir, "dune-strategy-concept1-layered-2k.png"));
  fs.writeFileSync(path.join(exportedDir, "dunestrategy-logo-2k.png"), default2k);
  fs.writeFileSync(path.join(publicDir, "dunestrategy-logo-2k.png"), default2k);

  // Update src/assets for React Header
  await sharp(default2k).resize(256, 256).png().toFile(path.join(assetsDir, "logo-gold.png"));
  await sharp(default2k).resize(256, 256).png().toFile(path.join(assetsDir, "logo.png"));

  // Generate multi-size favicon suite
  await sharp(default2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(default2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(default2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(default2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(default2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(default2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(default2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(default2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("All 3 Dune Strategy logos exported and website assets configured successfully!");
}

exportAll().catch(console.error);
