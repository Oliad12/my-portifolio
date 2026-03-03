export default function Head() {
  return (
    <>
      {/* SEO Metadata */}
      <title>Tibebu | Software Engineer</title>
      <meta
        name="description"
        content="I build modern web apps that help businesses grow."
      />

      {/* Google Site Verification */}
      <meta 
      name="google-site-verification" 
      content="-uw8Oim3ps2RWq5I1WpddMsOw0ZHR9xwV6GOY1uNFHE" />
      <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Metadata */}
      <meta property="og:title" content="Tibebu | Software Engineer" />
      <meta
        property="og:description"
        content="I build modern web apps that help businesses grow."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tibe-port.vercel.app" />
      <meta property="og:image" content="https://tibe-port.vercel.app/og-image.png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tibebu | Software Engineer" />
      <meta
        name="twitter:description"
        content="I build modern web apps that help businesses grow."
      />
      <meta name="twitter:image" content="https://tibe-port.vercel.app/og-image.png" />
    </>
  );
}