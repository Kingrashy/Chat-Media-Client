import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { ParaText } from "../../lib";
import { BsSun } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { CgLogIn } from "react-icons/cg";
import { UseMoreModal } from "../../hook";
import { IoClose } from "react-icons/io5";
import { logOut } from "../../redux/authSlice";

const MoreModeal = () => {
  const auth = useSelector((state) => state.CAuth);
  const moremodal = UseMoreModal();
  const dispatch = useDispatch();

  const modalRef = useRef();

  // Add an event listener to handle clicks outside the modal
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // If clicked outside the modal, close it using the moremodal.onClose() function
        // moremodal.onClose();
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [moremodal]);

  function Close() {
    moremodal.onClose();
  }

  return (
    <>
      {moremodal?.isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 left-[1rem] top-[28rem] z-[100] h-[250px] w-[250px]"
        >
          <IoClose
            size={25}
            onClick={() => Close()}
            className="cursor-pointer -top-[2rem] absolute right-0"
          />
          <div className="bg-white w-[250px] rounded-[10px] shadow-2xl">
            <div className="flex flex-col p-[10px] gap-[2px]">
              <Link
                onClick={() => Close()}
                className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-[12px] rounded-[8px]"
                to="/setting"
              >
                <MdOutlineSettings size={18} />
                <ParaText
                  text="Settings"
                  className={`font-sofia text-[18px]`}
                />
              </Link>
              <Link
                onClick={() => Close()}
                className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-[12px] rounded-[8px]"
                to="/saved"
              >
                <BiBookmark size={18} />
                <ParaText text="Saved" className={`font-sofia text-[18px]`} />
              </Link>
              <div className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-[12px] rounded-[8px]">
                <BsSun size={18} />
                <ParaText
                  text="Switch apperance"
                  className={`font-sofia text-[18px]`}
                />
              </div>
            </div>
            <hr />
            <div className="p-2 flex flex-col">
              {auth?._id ? (
                <div
                  className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-[12px] rounded-[8px]"
                  onClick={() => {
                    dispatch(logOut());
                    Close();
                  }}
                >
                  <HiOutlineLogin size={18} />
                  <ParaText
                    text="Logout"
                    className={`font-sofia text-[18px]`}
                  />
                </div>
              ) : (
                <Link
                  onClick={() => Close()}
                  className="flex gap-2 items-center hover:bg-neutral-200 cursor-pointer p-[12px] rounded-[8px]"
                  to="/auth/login"
                >
                  <CgLogIn size={18} />
                  <ParaText text="Login" className={`font-sofia text-[18px]`} />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreModeal;
