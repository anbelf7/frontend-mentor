import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({ title, keywords, description }) => {
  const router = useRouter();
  const titleLow = router.pathname.substring(1);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="black" />

      <title>
        {router.pathname === '/' ? title : `${title} - ${capitalize(titleLow)}`}
      </title>
    </Head>
  );
};

export default Meta;
