import React, { FC } from "react";

type transparentFunction = <T>(...a: any[]) => T;

//@ts-ignore
export const funCsole: {
  [k: string]: transparentFunction;
} = {};
for (const m in console) {
  if (Object.prototype.hasOwnProperty.call(console, m)) {
    //@ts-ignore
    const element = console[m];
    funCsole[m] = <T>(...args: any): T => {
      element(args);
      return args;
    };
  }
}

export const arrFn = {
  push:
    (a: any[]) =>
    (...args: any): any[] => {
      Array.prototype.push.apply(a, args);
      return a;
    },
};

export const ucFirst = (s:string): string => s.slice(0,1).toLocaleUpperCase + s.slice(1)

export const easeInOutQuad = (t: number): number => t<.5 ? 2*t*t : -1+(4-2*t)*t;

export const getRelativePos = (elm: HTMLElement) => {
  const pPos = (elm.parentNode as HTMLElement).getBoundingClientRect() // parent pos
  const cPos = elm.getBoundingClientRect(); // target pos
  return {
    top: cPos.top    - pPos.top + (elm.parentNode as HTMLElement).scrollTop,
    right: cPos.right  - pPos.right,
    bottom : cPos.bottom - pPos.bottom,
    left   : cPos.left   - pPos.left,
  };
}

export const isMobile = ():boolean => window.matchMedia("(max-width: 640px)").matches;
