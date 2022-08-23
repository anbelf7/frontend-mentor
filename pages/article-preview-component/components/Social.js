import Image from 'next/image';
import avatar from '../images/avatar-michelle.jpg';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import { ShareIcon } from '@heroicons/react/outline';
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
            <p className="text-desaturated-dark-blue text-xs tracking-wide">
              28 Jun 2020
            </p>
          </div>
          <span
            onClick={share}
            className="bg-grayish-blue flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-1"
          >
            <ShareIcon className="text-light-grayish-blue h-5" />
          </span>
        </div>
      ) : (
        <div className="bg-very-dark-grayish-blue text-grayish-blue flex h-16 items-center justify-between rounded-b-lg px-5">
          <h3 className="uppercase tracking-widest">share</h3>
          <div className="mr-auto ml-10 flex space-x-5">
            <span>
              <Image src={facebook} />
            </span>
            <span>
              <Image src={pinterest} />
            </span>
            <span>
              <Image src={twitter} />
            </span>
          </div>
          <span
            onClick={share}
            className="bg-grayish-blue flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-1"
          >
            <ShareIcon className="text-light-grayish-blue h-5" />
          </span>
        </div>
      )}
    </>
  );
};

export default Social;
