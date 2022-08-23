import Image from 'next/image';
import Social from './components/Social';
import img from './images/drawers.jpg';

const index = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
      <div className="mx-auto flex h-screen w-full flex-col items-center justify-center  bg-slate-500 px-10 sm:w-2/3 sm:flex-row">
        <Image
          src={img}
          objectFit="contain"
          className="w-full rounded-t-lg  sm:rounded-l-lg sm:rounded-tr-none"
        />

        <div className="bg-light-grayish-blue flex flex-col rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
          <div className="space-y-5 p-5">
            <h2 className="text-lg font-bold">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className="text-desaturated-dark-blue text-sm leading-6">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default index;
