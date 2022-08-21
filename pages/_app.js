import Layout from '../components/Layout';
import Meta from '../components/Meta';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const title = 'Frontend Mentor Challenges';
  return (
    <Layout title={title}>
      <Meta
        title={title}
        keywords="Frontend Mentor, frontend"
        description="My solution for challenges from Frontend Mentor"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
