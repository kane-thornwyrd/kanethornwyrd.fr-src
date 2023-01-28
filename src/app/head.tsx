import { titleDefault, url, description, author } from "./conf";

export default function Head({ title = titleDefault }) {
  return (
    <>
      <script
        async
        src=" https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js "
      />
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      <title>{titleDefault}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Software Engineer, React, Express, Typescript, Frontend, Backend, Fullstack, Geek"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />

      {/** FB stuff */}
      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={"/icons/share.png"} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />

      {/** App/icons stuff */}
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        color="#000000"
        href="/icons/safari-pinned-tab.svg"
      />
      <link rel="apple-touch-startup-image" href="/startup.png" />
      <link rel="icon" href="/favicon.ico" />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <meta name="theme-color" content="#d4d4d8" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@onirenaud" />
    </>
  );
}
