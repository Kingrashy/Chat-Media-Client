import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../helper/fetch";
import { PlaceholderImage } from "../../assets";
import { ClipLoader, ParaText } from "../../lib";

const OwnLayout = () => {
  const auth = useSelector((state) => state.CAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getLoginUser = async () => {
      setIsLoading(true);
      const data = await getUser(auth);
      setIsLoading(false);
      setUser(data);
    };
    if (auth?._id) {
      getLoginUser();
    }
  }, [auth]);
  return (
    <div className="flex justify-between items-center w-full">
      {isLoading ? (
        <div className="flex items-center w-full justify-center">
          <ClipLoader />
        </div>
      ) : (
        <>
          <div className="flex gap-2 relative items-center">
            <img
              src={user?.userProfile?.url || PlaceholderImage}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <ParaText className="font-sofia text-[16px]" text={user.name} />
              <ParaText
                className="font-sofia text-[15px] text-neutral-500 -translate-y-1"
                text={user.username}
              />
            </div>
          </div>
          <ParaText
            text="Logout"
            className="font-sofia text-blue-600 cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default OwnLayout;
