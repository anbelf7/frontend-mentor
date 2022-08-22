import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ChallengeCard = ({ title, url, image, tag }) => {
  return (
    <Link href={url}>
      <div className="group mt-5 cursor-pointer overflow-hidden rounded bg-white">
        <div className="relative h-32 overflow-hidden rounded transition duration-300 group-hover:scale-110">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>

        <div className="py-5">
          <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
            {tag}
          </p>

          <h2 className="inline-block cursor-pointer text-2xl font-bold leading-5 transition-colors group-hover:text-blue-600">
            {title}
          </h2>

          {/* <p className="mb-4 text-gray-700">{desc}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ChallengeCard;
