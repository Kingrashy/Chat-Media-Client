import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiSolidChat } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { FaBell, FaRegBell, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const MobileNav = () => {
  const path = useLocation();
  const auth = useSelector((state) => state.CAuth);
  return (
    <div className="fixed bottom-0 border-t-[1px] border-t-[rgb(219, 219, 219)] p-2 h-[40px] bg-[rgb(255,255,255)] w-full hidden max-[700px]:flex">
      <div className="flex w-full justify-between">
        <Link className="flex gap-2 items-center cursor-pointer p-1" to="/">
          {path.pathname === "/" ? (
            <HiHome size={27} />
          ) : (
            <HiOutlineHome size={27} />
          )}
        </Link>
        <div className="flex gap-2 items-center cursor-pointer p-1">
          <FiSearch size={27} />
        </div>
        <Link
          className="flex gap-2 items-center cursor-pointer p-1"
          to="/direct/indox"
        >
          <BiSolidChat size={27} />
        </Link>
        <Link
          className="flex gap-2 items-center cursor-pointer p-1"
          to="/notifications"
        >
          {path.pathname === "/notifications" ? (
            <FaBell size={27} />
          ) : (
            <FaRegBell size={27} />
          )}
        </Link>
        <div className="flex gap-2 items-center cursor-pointer p-1">
          <IoIosCreate size={27} />
        </div>
        <Link
          className="flex gap-2 items-center cursor-pointer p-1"
          to={`/${auth.username}/`}
        >
          <FaUserCircle size={27} />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
