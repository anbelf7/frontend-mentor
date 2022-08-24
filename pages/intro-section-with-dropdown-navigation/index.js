import Head from 'next/head';
import Header from './components/Header';
import Banner from './components/Banner';

const index = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen flex-col bg-almost-white font-epilogue text-almost-black">
        <Header />
        <Banner />
      </div>
    </>
  );
};

export default index;
