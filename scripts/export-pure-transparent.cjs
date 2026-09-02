const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const thickSvgPath = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/dune-all-lines-thick.svg";

async function exportPureTransparent() {
  const svgContent = fs.readFileSync(thickSvgPath, "utf8");

  // Remove the <circle fill="#0A1120" /> so the entire background (inside and outside) is 100% transparent
  const transparentSvg = svgContent.replace(/<circle cx="512" cy="512" r="350" fill="#0A1120" \/>/, "");

  const transparentBuf = await sharp(Buffer.from(transparentSvg))
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(path.join(exportedDir, "dunestrategy-logo-gold-transparent-2k.png"), transparentBuf);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/dunestrategy-logo-gold-transparent-2k.png", transparentBuf);
  console.log("Pure transparent gold-only PNG exported successfully!");
}

exportPureTransparent().catch(console.error);
