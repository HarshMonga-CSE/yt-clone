import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaThumbsUp } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { GrChannel } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiFeedbackLine } from "react-icons/ri";
import { useUtils } from "../context/utilsContext";
function Sidebar() {
  // const sidebarItems = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     icon: <GoHome />
  //   },
  //   {
  //     id: 2,
  //     name: "Shorts",
  //     icon: <SiYoutubeshorts />
  //   },
  //   {
  //     id: 1,
  //     name: "Subscription",
  //     icon: <MdOutlineSubscriptions />
  //   }
  // ];
  // const sidebarItems2 = [
  //   {
  //     id: 1,
  //     name: "Your Channel",
  //     icon: <GrChannel />
  //   },
  //   {
  //     id: 2,
  //     name: "History",
  //     icon: <GoHistory />
  //   },
  //   {
  //     id: 3,
  //     name: "playlists",
  //     icon: <CgPlayList />
  //   },
  //   {
  //       id: 4,
  //       name: "Your Videos",
  //       icon: <CiYoutube />
  //     },
  //     {
  //       id: 3,
  //       name: "watch later",
  //       icon: <MdOutlineWatchLater />
  //     },
  //     {
  //       id: 3,
  //       name: "Liked videos",
  //       icon: <LiaThumbsUp />
  //     },

  // ];
  // const sidebarItems3 = [
  //   {
  //     id: 1,
  //     name: "Trending",
  //     icon: <SiTrendmicro />
  //   },
  //   {
  //     id: 2,
  //     name: "Shopping",
  //     icon: <HiOutlineShoppingBag />
  //   },
  //   {
  //     id: 3,
  //     name: "Music",
  //     icon: <IoMusicalNotesOutline />
  //   },
  //   {
  //     id: 4,
  //     name: "Films",
  //     icon: <PiFilmSlateLight />
  //   },
  //   {
  //     id: 5,
  //     name: "Live",
  //     icon: <CgMediaLive />
  //   },
  //   {
  //     id: 6,
  //     name: "Gaming",
  //     icon: <IoGameControllerOutline />
  //   },
  //   {
  //     id: 7,
  //     name: "News",
  //     icon: <FaRegNewspaper />
  //   },
  //   {
  //     id: 8,
  //     name: "Sport",
  //     icon: <TfiCup />
  //   },
  //   {
  //     id: 9,
  //     name: "Courses",
  //     icon: <PiLightbulbLight />
  //   },
  //   {
  //     id: 10,
  //     name: "Fashion & beauty",
  //     icon: <GiHanger />
  //   },
  //   {
  //     id: 11,
  //     name: "Podcasts",
  //     icon: <MdPodcasts />
  //   },
  // ];
  // const sidebarItems4 = [
  //   {
  //     id: 1,
  //     name: "Youtube Premium",
  //     icon: <FaYoutube />
  //   },
  //   {
  //     id: 2,
  //     name: "Youtube Studio",
  //     icon: <SiYoutubestudio />
  //   },
  //   {
  //     id: 3,
  //     name: "Youtube Music",
  //     icon: <SiYoutubemusic />
  //   },
  //   {
  //     id: 4,
  //     name: "Youtube kids",
  //     icon: <SiYoutubekids />
  //   }
  // ];
  // const sidebarItems5 = [
  //   {
  //     id: 1,
  //     name: "Settings",
  //     icon: <IoSettingsOutline />
  //   },
  //   {
  //     id: 2,
  //     name: "Report history",
  //     icon: <RiFlagLine />
  //   },
  //   {
  //     id: 3,
  //     name: "Help",
  //     icon: <RxQuestionMarkCircled />
  //   },
  //   {
  //     id: 4,
  //     name: "Send feedback",
  //     icon: <RiFeedbackLine />
  //   }
  // ];

const {isSidebar, mobileShow, setMobileShow} = useUtils();

  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 1,
          name: "Subscription",
          icon: <MdOutlineSubscriptions />,
        },
      ],},

      {groupName: "You",
      groupItems: [
        {
          id: 1,
          name: "Your Channel",
          icon: <GrChannel />,
        },
        {
          id: 2,
          name: "History",
          icon: <GoHistory />,
        },
        {
          id: 3,
          name: "playlists",
          icon: <CgPlayList />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <CiYoutube />,
        },
        {
          id: 3,
          name: "watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 3,
          name: "Liked videos",
          icon: <LiaThumbsUp />,
        },
      ],},

     { groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <IoMusicalNotesOutline />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <PiLightbulbLight />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <GiHanger />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <MdPodcasts />,
        },
      ],},

{      groupName: "More from Youtube",
      groupItems: [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Youtube kids",
          icon: <SiYoutubekids />,
        },
      ],},
      
{      groupName: "",
      groupItems:[
          {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />,
          },
          {
            id: 2,
            name: "Report history",
            icon: <RiFlagLine />,
          },
          {
            id: 3,
            name: "Help",
            icon: <RxQuestionMarkCircled />,
          },
          {
            id: 4,
            name: "Send feedback",
            icon: <RiFeedbackLine />,
          }
        ],},
    
  ];

  const ModelOverlay = () => {
    return (
      <div className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"  onClick={() => setMobileShow(!mobileShow)} >
      </div>
    ) ;
  }


  return (
    <>
    <div className={`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" : "hidden h-[calc(100vh-6.625rem)] w-[18%]"} xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin py-3`}>
      {/* Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((group) => {
          return (
            <div className="mb-5">
              <h1 className="font-bold">{group.groupName}</h1>
              {group.groupItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-full p-1 my-2"
                >
                  <div className="text-sm cursor-pointer">{item.icon}</div>
                  <span className="text-sm cursor-pointer">{item.name}</span>
                </div>
        ))}
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* You */}
      {/* <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2 font-semibold">
          <h1>You</h1>
          <FaChevronRight/>
        </div>
        {sidebarItems2.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-full p-1">
              <div className="text-xl cursor-pointer">{items.icon}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr /> */}
      {/* Explore */}
      {/* <div className="mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-full p-1">
              <div className="text-xl cursor-pointer">{items.icon}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr /> */}
      {/* More Section */}
      {/* <div className="mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-semibold">More From YouTube</h1>
        </div>
        {sidebarItems4.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-full p-1">
              <div className="text-xl cursor-pointer text-red-500">{items.icon}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
        <div className="mt-4 space-y-3 items-center">
        {sidebarItems5.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-full p-1">
              <div className="text-xl cursor-pointer">{items.icon}</div>
              <span className="cursor-pointer">{items.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      <br />
      </div> */}
      <br />
      <span className="text-xs font-semibold text-gray-600">
        <p>
          About Press Copyright <br /> Contact us Creaters <br /> Advertise
          Developers{" "}
        </p>
        <br />
        <p>
          Terms Privacy Policy & Safety <br />
          How YouTube works <br />
          Test new features
        </p>
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-1">© 2024 Google LLC</p>
    </div>

    {mobileShow ? <ModelOverlay/> : null}
    </>
  );
}

export default Sidebar;
