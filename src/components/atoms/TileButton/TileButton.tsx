import { FC, useState } from "react";
import { Teko } from "@next/font/google";

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

const increase = (n: number, percent: number): number => n * (percent + 1);

const hexColorRegEx = (width: number = 2) => new RegExp(`\\w{${width}}`, "gi");

const splitHexColor = (hexColor: string, hexColorRegEx: RegExp): number[] => {
  const m = hexColor.slice(1).match(hexColorRegEx);
  return m === null ? [] : m.map((v) => parseInt(`0x${v}`));
};

const hexefyMax = (n: number, max: number = 255): string =>
  Math.min(Math.round(Math.abs(n)), max)
    .toString(16)
    .padStart(2, "0");

const lighten = (hexColor: string, percent: number): string => {
  const smallColors = hexColorRegEx(Math.round(hexColor.length / 4));
  const largeColors = hexColorRegEx(Math.round(hexColor.length / 4));
  switch (hexColor.length) {
    case 4:
      return `#${splitHexColor(hexColor, smallColors)
        .map((v) => increase(v, percent / 100))
        .map((v) => hexefyMax(v))
        .join("")}`;
    case 7:
      return `#${splitHexColor(hexColor, largeColors)
        .map((v) => increase(v, percent / 100))
        .map((v) => hexefyMax(v))
        .join("")}`;
    default:
      return "#ff0000";
  }
};

const reg = {id: 0}
const toId = (s: string | string[]): string => {
  if(!s){ const newId = reg.id; return (reg.id += 1 && newId).toString() }
  return toCamelCase(Array.isArray(s) ? s.join("-") : s);
}

const vertCenterSVGText = (
  lineNumber: number,
  lineTotal: number,
  height: number,
  fontHeight: number = 10
): number => {
  switch (lineTotal) {
    case 1:
      return Math.round(height / 2 + fontHeight);

    default:
      return Math.round(
        ((height / lineTotal) * lineNumber) / lineTotal +
          (height - fontHeight * lineTotal) / 2 +
          lineNumber * fontHeight
      );
  }
};

const getProperColor = (
  def: string,
  touch: string,
  hover: string,
  hasTouch: boolean,
  isHover: boolean
): string => {
  console.log([+!!def, +!!touch, +!!hover, +hasTouch, +isHover].join(''));
  switch ([+!!def, +!!touch, +!!hover, +hasTouch, +isHover].join("")) {
    case "10000":
    case "10010":
    case "10100":
    case "11000":
    case "11100":
    case "10110":
      return def;

    case "10001":
    case "10011":
      return lighten(def, 10);

    case "01010":
    case "11001":
    case "11010":
    case "11110":
      return touch;

    case "01011":
    case "11011":
      return lighten(touch, 10);

    case "01111":
    case "10101":
    case "10111":
    case "11101":
    case "11111":
      return hover;

    default:
      throw new Error("UNMANAGED TILEBUTTON STATE, NO COLOR FOUND !");
  }
};

const fontSizeApprox = (txt: string, ratio: number): number => txt.length * ratio

export const TileButton: FC<{
  text: string | string[];
  dimensions: [number, number];
  isTouchDevice?: boolean;
  backgroundColor?: string;
  backgroundTouchColor?: string;
  opacity?: number;
  hoverClass?: string;
  hoverColor?: string;
}> = ({
  text,
  dimensions,
  isTouchDevice = false,
  backgroundColor = "#a1a1aa",
  backgroundTouchColor = "",
  opacity = 1,
  hoverClass = "",
  hoverColor = "",
}) => {
  const [x, y] = dimensions;
  const [mouseHover, setMouseHover] = useState(false); // initiate it at false

  const backColor = getProperColor(
    backgroundColor,
    backgroundTouchColor,
    hoverColor,
    isTouchDevice,
    mouseHover
  );

  return (
    <div
      className={`transition-all duration-250 font-black flex justify-center` +
      `text-3xl cursor-zoom-in drop-shadow-sm hover:drop-shadow-xl hover:scale-110`}
      style={{opacity}}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <svg className={`knockout-text-container ${hoverClass}`} width={x} height={y}>

      <defs id="defs2">
          <linearGradient id="linearGradient829">
            <stop
              //@ts-ignore
              style={{stopColor:"#e2e2e2", stopOpacity:0.5}}
              offset="0"
              id="stop825"
              />
            <stop
              //@ts-ignore
              style={{stopColor:"#ffffff", stopOpacity:1}}
              offset="1"
              id="stop827"
            />
          </linearGradient>
          <linearGradient
            xlinkHref="#linearGradient829"
            id="linearGradient831"
            x1="21.037209"
            y1="8.0337391"
            x2="29.578304"
            y2="0.26903379"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0.50154458,0,0,0.54891864,14.770658,-0.0798381)"
          />
        </defs>
        <g id="layer1">
          <path
            id="rect4018"
            style={{fill:backColor}}
            d="m 0,0 h 80 l 16,16 v 96 h -96 z"
            mask={`url(#knockout-text-${toId(text)})`}
          />
          <path
            //@ts-ignore
            style={{fill:lighten(backColor, 10)}}
            d="m 80,0 v 16 l 16,0 z"
            id="path122-7"
            />
          <path
            //@ts-ignore
            style={{mixBlendMode:"multiply",fill:"url(#linearGradient831)"}}
            d="m 80,0 v 16 l 16,0 z"
            id="path122"
          />
        </g>
        <mask id={`knockout-text-${toId(text)}`}>
          <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
          {!Array.isArray(text) ? (
            <text
              fontSize="37px"
              x="-4px"
              y="105px"
              fill="#000"
              textAnchor="left"
              className={teko_font.className}
            >
              {text}
            </text>
          ) : (
            text.map((t, i, { length }) => (
              <text
                fontSize="30px"
                key={toId(t)}
                x="-2px"
                // y={vertCenterSVGText(i, length, y, 5)}
                y={ 65 + i*20 + "px"}
                fill="#000"
                textAnchor="left"
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
