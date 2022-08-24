import Image from 'next/image';
import avatar from '../images/avatar-michelle.jpg';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import { ShareIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);
  const share = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      {!isOpen ? (
        <div className="flex h-16 items-center justify-between px-5">
          <Image src={avatar} height={50} width={50} className="rounded-full" />
          <div className="mr-auto ml-5 flex flex-col justify-between">
            <h3 className="text-sm font-bold">Michelle Appleton</h3>
            <p className="text-xs tracking-wide text-desaturated-dark-blue">
              28 Jun 2020
            </p>
          </div>
          <span
            onClick={share}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light-grayish-blue p-1 text-very-dark-grayish-blue"
          >
            <ShareIcon className="h-5" />
          </span>
        </div>
      ) : (
        <>
          {/* Mobile: flex lg:hidden */}
          <div className="-mx-5 -mb-5 flex h-16 items-center justify-between rounded-b-lg bg-very-dark-grayish-blue px-10 text-grayish-blue lg:hidden">
            <h3 className="uppercase tracking-widest">share</h3>
            <div className="mr-auto ml-10 flex space-x-5">
              <span>
                <Image src={facebook} alt="facebook" />
              </span>
              <span>
                <Image src={pinterest} alt="pinterest" />
              </span>
              <span>
                <Image src={twitter} alt="twitter" />
              </span>
            </div>
            <span
              onClick={share}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-grayish-blue p-1"
            >
              <ShareIcon className="h-5 text-light-grayish-blue" />
            </span>
          </div>

          {/* Desktop: hidden lg:flex */}
          <div className="relative hidden h-16 items-center justify-between px-5 lg:flex">
            <Image
              src={avatar}
              height={50}
              width={50}
              alt="avatar"
              className="rounded-full"
            />
            <div className="mr-auto ml-5 flex flex-col justify-between">
              <h3 className="text-sm font-bold">Michelle Appleton</h3>
              <p className="text-xs tracking-wide text-desaturated-dark-blue">
                28 Jun 2020
              </p>
            </div>
            <span
              onClick={share}
              className=" flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light-grayish-blue p-1 text-very-dark-grayish-blue"
            >
              <ShareIcon className="h-5" />
            </span>

            <div className="absolute right-8 bottom-16 flex translate-x-1/2 items-center justify-center rounded-lg bg-very-dark-grayish-blue py-4 px-8 shadow-lg">
              <div className="absolute -bottom-2 h-5 w-5 rotate-45 bg-very-dark-grayish-blue shadow-lg"></div>
              <h3 className="uppercase tracking-widest text-grayish-blue">
                share
              </h3>
              <div className="mr-auto ml-10 flex space-x-5">
                <span>
                  <Image src={facebook} alt="facebook" />
                </span>
                <span>
                  <Image src={pinterest} alt="pinterest" />
                </span>
                <span>
                  <Image src={twitter} alt="twitter" />
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Social;
