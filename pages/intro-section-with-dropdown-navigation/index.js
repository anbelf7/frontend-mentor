import Head from 'next/head';
import Header from './components/Header';
import Banner from './components/Banner';

const index = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-almost-white text-almost-black flex h-screen flex-col">
        <Header />
        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default index;
