import Layout from '../components/Layout';
import Meta from '../components/Meta';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const title = 'Titolo Sito';
  return (
    <Layout title={title}>
      <Meta
        title={title}
        keywords="keyword, keyword"
        description="Descrizione sito"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
