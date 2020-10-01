import Head from "next/head";
import { useRouter } from "next/router";
export function getProcessedMetaTags(data) {
  return {
    title: data.description.title,
    description: data.description.description,
    hrefLang: data.hrefLang,
    robots: data.robots,
  };
}
export function getCurrentURL() {
  const { asPath } = useRouter();
  return "http://localhost:3000" + asPath;
}
export default function MetaTags({
  title,
  description,
  hrefLang,
  robots,
  currentURL,
}) {
  // TODO: getCurrentURL() shouldn't be used here. As this is HTML header, we can't use Javascript here.
  //       the URL should come from SSR's getServerSideProps()
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL || getCurrentURL()} />
      <meta property="og:description" content={description} />
      <meta name="robots" content={robots} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentURL || getCurrentURL()} />
      <link rel="alternate" href={hrefLang?.["id-id"]} hrefLang="id-id" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-152951972-1');`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5857F8N')`,
        }}
      />
    </Head>
  );
}
