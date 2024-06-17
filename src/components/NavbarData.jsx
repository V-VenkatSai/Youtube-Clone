import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaThumbsUp } from "react-icons/lia";
import { RiShoppingBag4Line, RiMusicLine } from "react-icons/ri";
import { GiClapperboard } from "react-icons/gi";
import { CiStreamOn } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrTrophy } from "react-icons/gr";
import { AiOutlineBulb } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { GiAmpleDress } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { RiFlagLine } from "react-icons/ri";
import { RiFeedbackLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import subscriptions from "../images/subscriptions.svg";
import shorts from "../images/youtube shorts.svg";
import premium from "../images/youtube-premium.png"
import studio from "../images/youtube-studio.png"
import music from "../images/youtube-music.png"
import kids from "../images/youtube-kids.png"
import trending from "../images/trending.png"

const sidebarSection1 = [
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
];

const sidebarSection2 = [
  {
    icon: <IoPersonCircleOutline className="text-2xl" />,
    name: "Your channel",
  },
  {
    icon: <RiHistoryLine className="text-2xl" />,
    name: "History",
  },
  {
    icon: <CgPlayList className="text-2xl" />,
    name: "Playlists",
  },
  {
    icon: <RiVideoLine className="text-2xl" />,
    name: "Your videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-2xl" />,
    name: "Watch later",
  },
  {
    icon: <LiaThumbsUp className="text-2xl" />,
    name: "Liked videos",
  },
];

const sidebarSection3 = [
  {
    icon: <img src={trending} alt="youtube-shorts" className="w-5" />,
    name: "Trending",
  },
  {
    icon: <RiShoppingBag4Line className="text-2xl" />,
    name: "Shopping",
  },
  {
    icon: <RiMusicLine className="text-2xl" />,
    name: "Music",
  },
  {
    icon: <GiClapperboard className="text-2xl" />,
    name: "Movies",
  },
  {
    icon: <CiStreamOn className="text-2xl" />,
    name: "Live",
  },
  {
    icon: <SiYoutubegaming className="text-2xl" />,
    name: "Gaming",
  },
  {
    icon: <IoNewspaperOutline className="text-2xl" />,
    name: "News",
  },
  {
    icon: <GrTrophy className="text-2xl" />,
    name: "Sports",
  },
  {
    icon: <AiOutlineBulb className="text-2xl" />,
    name: "Courses",
  },
  {
    icon: <GiAmpleDress className="text-2xl" />,
    name: "Fashion & Beauty",
  },
  {
    icon: <MdPodcasts className="text-2xl" />,
    name: "Podcasts",
  },    
];

const sidebarSection4 = [
  {
    icon: <img src={premium} alt="youtube-shorts" className="w-5" />,
    name: "YouTube Premium",
  },
  {
    icon: <img src={studio} alt="youtube-shorts" className="w-5" />,
    name: "YouTube Studio",
  },
  {
    icon: <img src={music} alt="youtube-shorts" className="w-5" />,
    name: "YouTube Music",
  },
  {
    icon: <img src={kids} alt="youtube-shorts" className="w-5" />,
    name: "YouTube Kids",
  },
];

const sidebarSection5 = [
  {
    icon: <IoSettingsOutline className="text-2xl" />,
    name: "Settings",
  },
  {
    icon: <RiFlagLine className="text-2xl" />,
    name: "Report history",
  },
  {
    icon: <IoIosHelpCircleOutline className="text-2xl" />,
    name: "Help",
  },
  {
    icon: <RiFeedbackLine className="text-2xl" />,
    name: "Send feedback",
  },
];

export {
  sidebarSection1,sidebarSection2,sidebarSection3,sidebarSection4,sidebarSection5 }