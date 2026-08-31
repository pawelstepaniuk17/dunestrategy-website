interface GeometricAccentProps {
  variant?: "lines" | "grid" | "diagonal" | "corner" | "dots" | "cross";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { width: 200, height: 200 },
  md: { width: 400, height: 400 },
  lg: { width: 600, height: 600 },
  xl: { width: 800, height: 800 },
};

export function GeometricAccent({ variant = "lines", className = "", size = "lg" }: GeometricAccentProps) {
  const { width, height } = sizeMap[size];

  if (variant === "lines") {
    const lineCount = Math.floor(height / 30);
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="text-gold/10">
          {Array.from({ length: lineCount }, (_, i) => (
            <line key={i} x1="0" y1={(i + 1) * 30} x2={width} y2={(i + 1) * 30} stroke="currentColor" strokeWidth="1" />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "grid") {
    const step = 50;
    const positions = Array.from({ length: Math.floor(width / step) + 1 }, (_, i) => i * step);
    const positionsY = Array.from({ length: Math.floor(height / step) + 1 }, (_, i) => i * step);
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="text-gold/10">
          {positions.map((pos) => (
            <line key={`v-${pos}`} x1={pos} y1="0" x2={pos} y2={height} stroke="currentColor" strokeWidth="1" />
          ))}
          {positionsY.map((pos) => (
            <line key={`h-${pos}`} x1="0" y1={pos} x2={width} y2={pos} stroke="currentColor" strokeWidth="1" />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "diagonal") {
    const lineCount = Math.floor((width + height) / 40);
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="text-gold/10">
          {Array.from({ length: lineCount }, (_, i) => {
            const offset = (i - lineCount / 2) * 40;
            return (
              <line
                key={i}
                x1={offset}
                y1={height}
                x2={offset + height}
                y2={0}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>
    );
  }

  if (variant === "corner") {
    const s = Math.min(width, height) * 0.4;
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" className="text-gold/10">
          <path d={`M0 0 L${s} 0 L${s} ${s * 0.08} L${s * 0.08} ${s * 0.08} L${s * 0.08} ${s} L0 ${s} Z`} fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    const step = 40;
    const dots: { cx: number; cy: number }[] = [];
    for (let x = step; x < width; x += step) {
      for (let y = step; y < height; y += step) {
        dots.push({ cx: x, cy: y });
      }
    }
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="text-gold/10">
          {dots.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r="1.5" fill="currentColor" />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "cross") {
    const step = 60;
    const crosses: { x: number; y: number }[] = [];
    for (let x = step; x < width; x += step) {
      for (let y = step; y < height; y += step) {
        crosses.push({ x, y });
      }
    }
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" className="text-gold/10">
          {crosses.map((c, i) => (
            <g key={i}>
              <line x1={c.x - 6} y1={c.y} x2={c.x + 6} y2={c.y} stroke="currentColor" strokeWidth="1" />
              <line x1={c.x} y1={c.y - 6} x2={c.x} y2={c.y + 6} stroke="currentColor" strokeWidth="1" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return null;
}
