import Head from 'next/head';
import Image from 'next/image';
import Social from './components/Social';
import img from './images/drawers.jpg';

const index = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex h-screen items-center justify-center bg-light-grayish-blue font-manrope">
        <div className="m-3 flex h-2/3 flex-col items-center justify-center sm:w-[67%] lg:h-[20rem] lg:flex-row">
          <div className="relative h-full w-full overflow-hidden rounded-t-lg lg:w-[45%] lg:rounded-l-lg lg:rounded-tr-none">
            <Image src={img} layout="fill" objectFit="cover" alt="image" />
          </div>
          <div className="flex h-full flex-1 flex-col justify-center rounded-b-lg bg-white p-5  lg:rounded-r-lg lg:rounded-bl-none">
            <div className="space-y-5 p-5">
              <h2 className="text-lg font-bold">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p className="text-sm leading-6 text-desaturated-dark-blue ">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
