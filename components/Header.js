import Link from 'next/link';
import React from 'react';
import { menuItems } from '../lib/menuItems';

const Header = ({ title, challenge }) => {
  return (
    <header className="bg-slate-200 text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between py-1 px-5 md:flex-row">
        <Link href="/">
          <a className="mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <h1 className="text-lg">{title}</h1>
          </a>
        </Link>
        {/* <h1>{challenge}</h1> */}
        <nav className="flex flex-wrap items-center space-x-10	md:ml-4  md:py-1 md:pl-4">
          {menuItems.map(
            (item) =>
              item.active && (
                <Link key={item.label} href={item.url}>
                  <a className="flex cursor-pointer items-center  hover:text-gray-900">
                    {item.label}
                  </a>
                </Link>
              )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
