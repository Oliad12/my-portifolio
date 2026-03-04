
export default function Head() {
  const domain = "https://tibe-port.vercel.app";
  const imageUrl = `${domain}/_next/static/media/logo.12d9db97.png`; 
  return (
    <>
      {/* Basic SEO */}
      <title>Tibebu | Software Engineer</title>
      <meta name="description" content="I build modern web apps that help businesses grow." />
      <meta name="keywords" content="Tibebu Dereje, Software Engineer, Web Developer, Portfolio, Full Stack" />
      <meta name="author" content="Tibebu Dereje" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="-uw8Oim3ps2RWq5I1WpddMsOw0ZHR9xwV6GOY1uNFHE"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Tibebu | Software Engineer" />
      <meta property="og:description" content="Helping startups and businesses transform ideas into scalable, AI-powered platforms." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={domain} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tibebu | Software Engineer" />
      <meta name="twitter:description" content="Helping startups and businesses transform ideas into scalable, AI-powered platforms." />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}