import Image from 'next/image';
import logo from '../public/logo.svg';
import { MenuIcon } from '@heroicons/react/outline';
import { menuItems } from './menuItems';

const Header = () => {
  return (
    <header className=" flex items-center justify-between px-5 py-5 text-sm text-medium-gray sm:px-10">
      <div className=" flex justify-center">
        <Image src={logo} />
      </div>
      <MenuIcon className="h-8 cursor-pointer text-almost-black sm:hidden" />
      <div className="hidden flex-1 justify-between sm:flex">
        <nav className="mr-auto ml-20  flex space-x-20">
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
        <div className=" flex space-x-10">
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
