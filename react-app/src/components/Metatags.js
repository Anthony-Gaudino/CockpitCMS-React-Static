import React from "react";
import { Head, useSiteData } from "react-static";

const Metatags = () => {
  const { title, siteName, description, pageDescription } = useSiteData();
  return (
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={pageDescription || description} />
      <meta
        property="og:description"
        content={pageDescription || description}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
    </Head>
  );
}

export default Metatags;
