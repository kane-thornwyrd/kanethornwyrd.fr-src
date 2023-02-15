"use client";
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
// @ts-ignore
import VANTA_EFFECT from "vanta/dist/vanta.net.min";

const getViewportHeight = (): number =>
  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const getViewportWidth = (): number =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

export const useVantaBackground = (el: MutableRefObject<null>) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  window.THREE = THREE;
  useEffect(() => {
    const handleWindowResize = () => {
      if (!!vantaEffect) {
        // @ts-ignore
        vantaEffect.setOptions({
          minHeight: getViewportHeight(),
          minWidth: getViewportWidth(),
        });
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [vantaEffect]);

  useEffect(() => {
    if (!vantaEffect)
      setVantaEffect(
        VANTA_EFFECT({
          el: el.current,
          minHeight: getViewportHeight(),
          minWidth: getViewportWidth(),
          scale: 1.0,
          scaleMobile: 1.5,
          color: 0xf5f4f2,
          backgroundColor: 0xddd9da,
          points: 12.0,
          maxDistance: 14.0,
          spacing: 10.0,
          showDots: false,
        })
      );
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, el]);
};

const VantaBackground: FC<{}> = () => {
  const myRef = useRef(null);
  useVantaBackground(myRef);
  return (
    <div className="z-0 top-0 bottom-0 left-0 right-0 fixed" ref={myRef}></div>
  );
};

export default VantaBackground;
