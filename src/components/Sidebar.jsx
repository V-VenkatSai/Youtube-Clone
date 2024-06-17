import React from "react";
import MiniSidebar from "./MiniSidebar";
import { MdOutlineChevronRight } from "react-icons/md";
import { sidebarSection1, sidebarSection2, sidebarSection3, sidebarSection4, sidebarSection5 } from "./NavbarData";
import "../index.css";

const Sidebar = ({ sidebarOpen }) => {
  
  return (
    <div className="fixed left-0 top-14">
      {sidebarOpen ? (
        <div className="w-60 flex flex-col p-1 pl-3 pt-4 overflow-y-scroll overflow-x-hidden scroll-container">
          <ul className="flex flex-col border-b border-[#3f3f3f] pb-3 gap-0">
            {sidebarSection1.map(({ icon, name }) => (
              <li
                key={name}
                className={`w-52 ${name === 'Home' ? 'bg-[#272727]' : ''} hover:bg-[#272727] rounded-lg py-2 pl-5`} title={`${name}`}
                ><a href="#" className='flex flex-row items-center gap-6'>
              {icon}
              <span className="text-base font-normal">{name}</span>
              </a>
              </li>
            ))}
          </ul>
          <span className="w-52 text-base hover:bg-[#272727] py-2 mt-2 pl-5 flex gap-3 items-center rounded-lg cursor-pointer">You <MdOutlineChevronRight className="text-2xl"/></span>
          <ul className="flex flex-col border-b border-[#3f3f3f] pb-3 gap-1">
            {sidebarSection2.map(({ icon, name }) => (
              <li
                key={name}
                className={`w-52 ${name === 'Home' ? 'bg-[#272727]' : ''} hover:bg-[#272727] rounded-lg py-2 pl-5`} title={`${name}`}
              ><a href="#" className='flex flex-row items-center gap-6'>
              {icon}
              <span className="text-base font-normal">{name}</span>
              </a>
              </li>
            ))}
          </ul>
          <span className="w-52 text-base py-2 mt-2 pl-5">Explore</span>
          <ul className="flex flex-col border-b border-[#3f3f3f] pb-3 gap-1">
            {sidebarSection3.map(({ icon, name }) => (
              <li
                key={name}
                className={`w-52 ${name === 'Home' ? 'bg-[#272727]' : ''} hover:bg-[#272727] rounded-lg py-2 pl-5`} title={`${name}`}
              ><a href="#" className='flex flex-row items-center gap-6'>
              {icon}
              <span className="text-base">{name}</span>
              </a>
              </li>
            ))}
          </ul>
          <span className="w-52 text-base py-2 mt-2 pl-5">More from YouTube</span>
          <ul className="flex flex-col border-b border-[#3f3f3f] pb-3 gap-1">
            {sidebarSection4.map(({ icon, name }) => (
              <li
                key={name}
                className={`w-52 ${name === 'Home' ? 'bg-[#272727]' : ''} hover:bg-[#272727] rounded-lg py-2 pl-5`} title={`${name}`}
              ><a href="#" className='flex flex-row items-center gap-6'>
              {icon}
              <span className="text-base font-normal">{name}</span>
              </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-0 pt-2 pb-1">
            {sidebarSection5.map(({ icon, name }) => (
              <li
                key={name}
                className={`w-52 ${name === 'Home' ? 'bg-[#272727]' : ''} hover:bg-[#272727] rounded-lg py-2 pl-5`} title={`${name}`}
              ><a href="#" className='flex flex-row items-center gap-6'>
              {icon}
              <span className="text-base font-normal">{name}</span>
              </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <MiniSidebar />
      )}
    </div>
  );
};

export default Sidebar;
