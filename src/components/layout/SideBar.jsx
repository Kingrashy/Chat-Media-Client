import React from "react";
import { HeaderOne, ParaText } from "../../lib";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiSolidChat } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { FaBell, FaRegBell, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { UseMoreModal, usePostModal } from "../../hook";
import { useSelector } from "react-redux";

const SideBar = () => {
  const path = useLocation();
  const moremodal = UseMoreModal();
  const postmodal = usePostModal();
  const auth = useSelector((state) => state.CAuth);

  function Open(e) {
    moremodal.onOpen();
  }

  return (
    <div
      className={`fixed border-r border-r-neutral-500 h-full w-[200px] max-[800px]:w-[60px] max-[700px]:hidden ${
        path.pathname === "/auth/login" && "hidden"
      } ${path.pathname === "/auth/sign-up" && "hidden"}`}
    >
      <div className="flex flex-col relative w-full items-center h-full">
        <Link to="/">
          <HeaderOne
            text="HotLesbians"
            className="font-lobstar text-[23px] max-[800px]:hidden max-[700px]:text-[21px] mt-[2rem] gap-[4rem]"
          />
          <HeaderOne
            text="Hot"
            className="font-lobstar text-[23px] hidden max-[800px]:block max-[700px]:text-[21px] mt-[2rem] gap-[4rem]"
          />
        </Link>
        <div className="flex flex-col gap-[2rem] mt-[3rem] w-[90%] max-[800px]:w-auto">
          <Link
            className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]"
            to="/"
          >
            {path.pathname === "/" ? (
              <HiHome size={25} />
            ) : (
              <HiOutlineHome size={25} />
            )}
            <ParaText
              text="Home"
              className={`font-sofia text-[20px] max-[800px]:hidden`}
            />
          </Link>
          <div className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]">
            <FiSearch size={25} />
            <ParaText
              text="Search"
              className={`text-[20px] font-sofia max-[800px]:hidden`}
            />
          </div>
          <Link
            className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]"
            to="/direct/indox"
          >
            <BiSolidChat size={25} />
            <ParaText
              text="Message"
              className={`font-sofia text-[20px] max-[800px]:hidden`}
            />
          </Link>
          <Link
            className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]"
            to="/notifications"
          >
            {path.pathname === "/notifications" ? (
              <FaBell size={25} />
            ) : (
              <FaRegBell size={25} />
            )}
            <ParaText
              text="Notification"
              className={`font-sofia text-[20px] max-[800px]:hidden`}
            />
          </Link>
          <div
            className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]"
            onClick={postmodal.onOpen}
          >
            <IoIosCreate size={25} />
            <ParaText
              text="Create"
              className={`text-[20px] font-sofia max-[800px]:hidden`}
            />
          </div>
          <Link
            className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-1 rounded-[8px]"
            to={`/${auth.username}/`}
          >
            <FaUserCircle size={25} />
            <ParaText
              text="Profile"
              className={`font-sofia text-[20px] max-[800px]:hidden`}
            />
          </Link>
        </div>
        <div
          className="cursor-pointer absolute bottom-[1rem] left-[1rem] flex gap-[1rem] items-center hover:bg-neutral-200 w-[90%] p-1 rounded-[8px]"
          onClick={() => Open()}
        >
          <GiHamburgerMenu size={25} />
          <ParaText
            text="More"
            className={`font-sofia text-[20px] max-[800px]:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
