import dynamic from "next/dynamic";

import { BigMenu } from "@local/components/organisms/BigMenu";
import { IBM_Plex_Sans, Teko } from "@next/font/google";

import "./globals.css";

const font = IBM_Plex_Sans({
  subsets: ["latin-ext"],
  weight: ["100", "400", "500", "700"],
  variable: "--font-custom",
});

const titleFont = Teko({
  subsets: ["latin-ext"],
  weight: ["400"],
  variable: "--font-custom-title",
});

const VantaBackground = dynamic(
  () => import("@local/components/atoms/VantaBackground/VantaBackground"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={[
          font.variable,
          titleFont.variable,
          "font-sans bg-gradient-to-t from-zinc-300 to-zinc-100",
          "subpixel-antialiased leading-normal tracking-normal bg-fixed",
        ].join(" ")}
      >
        <div className="z-10 backdrop-blur-sm top-0 bottom-0 left-0 right-0 fixed"></div>
        <div
          style={{
            backgroundImage: "url('https://source.unsplash.com/7JX0-bfiuxQ')",
          }}
          className="brightness-95 z-0 top-0 bottom-0 left-0 right-0 fixed"
        ></div>
        <VantaBackground />
        <BigMenu />
        {children}
      </body>
    </html>
  );
}
