import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import img from './images/image-qr-code.png';

const index = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen items-center justify-center bg-slate-200 font-outfit">
        <div className="flex w-[26rem] flex-col items-center justify-center rounded-3xl bg-white p-5 text-center">
          <div className="relative h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={img}
              alt="qr-code-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col space-y-4 p-7 tracking-wide">
            <h2 className="text-2xl font-bold text-slate-800">
              Improve your front-end skills by building projects
            </h2>
            <p className="text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
