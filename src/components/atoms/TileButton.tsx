import { FC } from "react";
import { Teko } from "@next/font/google";

import styles from "./TileButton.module.scss";

const teko_font = Teko({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const toCamelCase = (s: string): string =>
  s
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index == 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

const toId = (s: string | string[]): string =>
  toCamelCase(Array.isArray(s) ? s.join("-") : s);

const vertCenterSVGText = (
  lineNumber: number,
  lineTotal: number,
  height: number,
  fontHeight: number = 10
): number => {
  switch (lineTotal) {
    case 1:
      return Math.round(height/2 + fontHeight);

    default:
      return Math.round((
        ((height / lineTotal) * lineNumber) / lineTotal +
          (height - fontHeight * lineTotal) / 2 +
          lineNumber * fontHeight)
      );
  }
};
export const TileButton: FC<{
  text: string | string[];
  dimensions: [number, number];
  backgroundColor?: string;
  opacity?: number;
  hoverClass?: string;
}> = ({ text, dimensions, backgroundColor = '#a1a1aa', opacity = 1, hoverClass = 'hover:fill-red-900' }) => {
  const [x, y] = dimensions;
  return (
    <div className={`transition-all duration-250 font-black text-3xl cursor-zoom-in drop-shadow-md hover:drop-shadow-xl hover:scale-110`}>
      <svg className="knockout-text-container" width={x} height={y}>
        <rect
          className={'transition-all duration-250 knockout-text-bg ' + hoverClass}
          style={{}}
          width="100%"
          height="100%"
          fill={backgroundColor}
          x="0"
          y="0"
          fillOpacity={opacity}
          mask={`url(#knockout-text-${toId(text)})`}
        />
        <mask id={`knockout-text-${toId(text)}`}>
          <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
          {!Array.isArray(text) ? (
            <text
              x="50%"
              y={vertCenterSVGText(0, 1, y)}
              fill="#000"
              textAnchor="middle"
              className={teko_font.className}
            >
              {text}
            </text>
          ) : (
            text.map((t, i, { length }) => (
              <text
                key={toId(t)}
                x="50%"
                y={vertCenterSVGText(i, length, y)}
                fill="#000"
                textAnchor="middle"
                className={teko_font.className}
              >
                {t}
              </text>
            ))
          )}
        </mask>
      </svg>
    </div>
  );
};
