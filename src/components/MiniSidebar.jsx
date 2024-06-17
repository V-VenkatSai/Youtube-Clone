import React from 'react'
import { GoHomeFill } from "react-icons/go";
import shorts from "../images/youtube shorts.svg";
import library from "../images/library.svg";
import subscriptions from "../images/subscriptions.svg";
import "../index.css";

const MiniSidebar = () => {

  const miniSideBar = [
    {
      icon: <GoHomeFill className="text-2xl" />,
      name: "Home",
    },
    {
      icon: <img src={shorts} alt="youtube-shorts" className="w-5" />,
      name: "Shorts",
    },
    {
      icon: <img src={subscriptions} alt="youtube-shorts" className="w-5" />,
      name: "Subscriptions",
    },
    {
      icon: <img src={library} alt="youtube-shorts" className="w-5" />,
      name: "You",
    },
  ];

  return (
    <div className="w-20 flex direction-col p-1 pl-2 pt-2">
          <ul className="flex flex-col gap-1">
            {miniSideBar.map(({ icon, name }) => (
              <li key={name} className="hover:bg-[#272727] rounded-lg py-3 px-1 gap-0" title={`${name}`}>
                <a href="#" className='flex flex-col items-center justify-center gap-2'>
                {icon}
                <span className="minNavText tracking-wide">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default MiniSidebar