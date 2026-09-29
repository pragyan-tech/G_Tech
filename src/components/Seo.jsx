import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://gtechent.com";
const SITE_NAME = "GTech Enterprises";
/* PLACEHOLDER — replace public/og-image.png with a plant-photography hero shot. */
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Per-page <head> tags via react-helmet-async: title, meta description,
 * canonical, Open Graph and Twitter card. Renders nothing visible. Extra
 * head tags (e.g. JSON-LD) can be passed as children.
 *
 * @param {{ title: string, description: string, path: string, children?: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export default function Seo({ title, description, path, children }) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {children}
    </Helmet>
  );
}
