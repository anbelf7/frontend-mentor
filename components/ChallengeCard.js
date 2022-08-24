import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const ChallengeCard = ({ title, url, image, tag, desc, code }) => {
  return (
    <div className=" mt-5  overflow-hidden rounded bg-white">
      <Link href={url}>
        <div className="relative h-48 cursor-pointer overflow-hidden rounded shadow-sm transition duration-300 hover:scale-105">
          <Image
            src={image}
            alt="challenge-image"
            layout="fill"
            objectFit="cover"
          />
          {/* <div className="relative hidden space-y-1 p-3 text-xs group-hover:block">
            {brief.map((e) => (
              <li>{e}</li>
            ))}
          </div> */}
        </div>
      </Link>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
          {tag}
        </p>
        <Link href={url}>
          <h2 className="inline-block cursor-pointer text-2xl font-bold leading-5 transition-colors hover:text-slate-500">
            {title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-700">{desc}</p>
        <div className="flex justify-between">
          <Link href={url}>
            <div className="mt-3 inline-flex cursor-pointer items-center font-medium hover:text-slate-500">
              <div className="flex items-center">
                <h3 className="text-sm tracking-wide ">Live Demo</h3>
                <ChevronRightIcon className="ml-1 h-4" />
              </div>
            </div>
          </Link>
          <Link href={code} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex cursor-pointer items-center font-medium hover:text-slate-500"
            >
              <div className="flex items-center">
                <h3 className="text-sm tracking-wide ">Code & Brief</h3>
                <ChevronRightIcon className="ml-1 h-4" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
