import Image from 'next/image';
import logo from '../images/logo.svg';
import { MenuIcon } from '@heroicons/react/outline';
import menuItems from './menuItems';

const Header = () => {
  return (
    <header className=" text-medium-gray flex items-center justify-between px-5 py-5 text-sm sm:px-10">
      <div className=" flex justify-center">
        <Image src={logo} />
      </div>
      <MenuIcon className="text-almost-black h-8 cursor-pointer sm:hidden" />
      <div className="hidden flex-1 justify-between sm:flex">
        <nav className="mr-auto ml-20  flex space-x-20">
          {menuItems.map((e, i) => (
            <div key={i} className="group relative  flex  items-center">
              <h3 className=" hover:text-almost-black  cursor-pointer">
                {e.label}
              </h3>
              <span className="h-4 w-4">{e.icon}</span>
              {e.menu ? (
                <div className=" bg-almost-white absolute right-0 top-10 hidden space-y-1 rounded-lg p-3 shadow-2xl group-hover:block">
                  {e.menu?.map((e, i) => (
                    <div
                      key={i}
                      className="group-1 hover:bg-almost-black hover:text-almost-white flex cursor-pointer items-center space-x-2 rounded-lg p-2"
                    >
                      {e.icon ? (
                        <span
                          className={`group-1-hover:text-almost-white h-4 w-4 ${e.color}`}
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
        <div className=" flex space-x-10">
          <button className="hover:text-almost-black">Login</button>
          <button className="border-medium-gray hover:border-almost-black hover:text-almost-black rounded-xl border px-6 py-3">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
