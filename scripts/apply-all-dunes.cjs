const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const baseDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/dunestrategy-website";
const publicDir = path.join(baseDir, "public");
const assetsDir = path.join(baseDir, "src/assets");
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const thickSvgPath = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/dune-all-lines-thick.svg";

async function applyAllDunes() {
  console.log("Installing complete restored Dune Strategy logo with all sand dunes...");

  const svgContent = fs.readFileSync(thickSvgPath, "utf8");
  const svgBuf = Buffer.from(svgContent);

  // 1. Update public SVGs
  fs.writeFileSync(path.join(publicDir, "logo.svg"), svgContent);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent);

  // 2. Export 2K Master PNG (2048x2048)
  const master2k = await sharp(svgBuf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.mkdirSync(exportedDir, { recursive: true });
  fs.writeFileSync(path.join(exportedDir, "dunestrategy-logo-2k.png"), master2k);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/dunestrategy-logo-2k.png", master2k);
  fs.writeFileSync(path.join(publicDir, "dunestrategy-logo-2k.png"), master2k);

  // 3. Update React Header Assets
  await sharp(master2k).resize(256, 256).png().toFile(path.join(assetsDir, "logo-gold.png"));
  await sharp(master2k).resize(256, 256).png().toFile(path.join(assetsDir, "logo.png"));

  // 4. Update Favicon Suite
  await sharp(master2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(master2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(master2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(master2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(master2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(master2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("All dune assets updated with complete restored dunes!");
}

applyAllDunes().catch(console.error);
