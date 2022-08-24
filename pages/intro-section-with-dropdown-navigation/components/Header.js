import Image from 'next/image';
import logo from '../images/logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import menuItems from './menuItems';
import {
  ClipboardDocumentListIcon,
  CalendarIcon,
  BellIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Features',
    url: '/',
    icon: <ChevronDownIcon />,
    menu: [
      {
        label: 'Todo List',
        url: '/',
        icon: <ClipboardDocumentListIcon />,
        color: 'text-purple-700',
      },
      {
        label: 'Calendar',
        url: '/',
        icon: <CalendarIcon />,
        color: 'text-cyan-600',
      },
      {
        label: 'Reminders',
        url: '/',
        icon: <BellIcon />,
        color: 'text-yellow-500',
      },
      {
        label: 'Planning',
        url: '/',
        icon: <ClockIcon />,
        color: 'text-purple-400',
      },
    ],
  },
  {
    label: 'Company',
    url: '/',
    icon: <ChevronDownIcon />,
    menu: [
      {
        label: 'History',
        url: '/',
        icon: '',
      },
      {
        label: 'Our Team',
        url: '/',
        icon: '',
      },
      {
        label: 'Blog',
        url: '/',
        icon: '',
      },
    ],
  },
  {
    label: 'Careers',
    url: '/',
  },
  {
    label: 'About',
    url: '/',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="z-10 flex flex-row items-center justify-between px-5 py-5 text-sm text-medium-gray sm:flex-col sm:space-y-3 sm:px-10 lg:flex-row lg:space-y-0">
      <div className="relative h-8 w-20">
        <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
      </div>
      {isOpen ? (
        <Bars3Icon
          onClick={() => setIsOpen(!isOpen)}
          className=" h-8 cursor-pointer text-almost-black sm:hidden"
        />
      ) : (
        <div className="flex flex-col">
          <XMarkIcon
            onClick={() => setIsOpen(!isOpen)}
            className="z-10 h-8 cursor-pointer text-almost-black sm:hidden"
          />
          <div className="absolute right-0 top-0 h-screen w-2/3 bg-almost-white pt-44 pl-5">
            <div className=" flex flex-col items-start space-y-10 ">
              <nav className=" flex flex-col   space-y-5 ">
                {menuItems.map((e, i) => (
                  <div key={i} className="group   flex flex-col items-center">
                    <div className="flex space-x-3">
                      <h3 className=" cursor-pointer  hover:text-almost-black">
                        {e.label}
                      </h3>
                      <span className="h-4 w-4">{e.icon}</span>
                    </div>
                    {e.menu ? (
                      <div className="  hidden space-y-1 rounded-lg bg-almost-white p-3  group-hover:block">
                        {e.menu?.map((e, i) => (
                          <div
                            key={i}
                            className="group-1 flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-almost-black hover:text-almost-white"
                          >
                            {e.icon ? (
                              <span
                                className={`h-4 w-4 group-1-hover:text-almost-white ${e.color}`}
                              >
                                {e.icon}
                              </span>
                            ) : null}
                            <h3 className="w-max px-2"> {e.label}</h3>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col space-y-3">
                <button className="hover:text-almost-black">Login</button>
                <button className="rounded-xl border border-medium-gray px-6 py-3 hover:border-almost-black hover:text-almost-black">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden flex-1 justify-between sm:flex sm:flex-col sm:items-center sm:space-y-3 lg:flex-row lg:space-y-0">
        <nav className="ml-20 flex justify-between space-x-10 ">
          {menuItems.map((e, i) => (
            <div key={i} className="group relative  flex  items-center">
              <h3 className=" cursor-pointer  hover:text-almost-black">
                {e.label}
              </h3>
              <span className="h-4 w-4">{e.icon}</span>
              {e.menu ? (
                <div className=" absolute right-0 top-10 hidden space-y-1 rounded-lg bg-almost-white p-3 shadow-2xl group-hover:block">
                  {e.menu?.map((e, i) => (
                    <div
                      key={i}
                      className="group-1 flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-almost-black hover:text-almost-white"
                    >
                      {e.icon ? (
                        <span
                          className={`h-4 w-4 group-1-hover:text-almost-white ${e.color}`}
                        >
                          {e.icon}
                        </span>
                      ) : null}
                      <h3 className="w-max px-2"> {e.label}</h3>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="flex space-x-10">
          <button className="hover:text-almost-black">Login</button>
          <button className="rounded-xl border border-medium-gray px-6 py-3 hover:border-almost-black hover:text-almost-black">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
