import Image from 'next/image';
import img from '../images/image-hero-desktop.png';
import logo1 from '../images/client-databiz.svg';
import logo2 from '../images/client-audiophile.svg';
import logo3 from '../images/client-meet.svg';
import logo4 from '../images/client-maker.svg';

const Banner = () => {
  return (
    <div className="flex  flex-1 flex-col items-center justify-between sm:container sm:mx-auto sm:flex-row sm:space-x-10 sm:px-12">
      <div className="order-1 flex h-2/3 flex-1 flex-col items-center justify-between sm:w-1/2 sm:items-start sm:space-y-10  ">
        <h2 className="mt-5 text-center text-4xl font-bold sm:text-left sm:text-8xl">
          Make remote work
        </h2>
        <p className="text-medium-gray w-3/4 text-center text-lg tracking-wide sm:text-left">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="border-almost-black bg-almost-black text-almost-white hover:bg-almost-white hover:text-almost-black cursor-pointer rounded-xl border px-6 py-3">
          Learn more
        </button>
        <div className="flex w-full items-center justify-between px-2 sm:pt-10">
          <Image src={logo1} />
          <Image src={logo2} />
          <Image src={logo3} />
          <Image src={logo4} />
        </div>
      </div>

      <div className="w-full sm:order-2 sm:w-1/2 sm:px-12">
        <Image
          src={img}
          width={1}
          height={1}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Banner;
