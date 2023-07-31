import React, { useEffect, useState } from "react";
import { ClipLoader, ParaText } from "../../lib";
import { PlaceholderImage } from "../../assets";
import { getUsers } from "../../helper/fetch";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Suggested = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getSuggested = async () => {
      setIsLoading(true);
      const data = await getUsers();
      setIsLoading(false);
      setUsers(data);
    };
    getSuggested();
  }, []);
  return (
    <div className="flex flex-col mt-2 relative w-full">
      <div className="flex justify-between">
        <ParaText
          text="Suggested for you"
          className="text-neutral-500 font-sofia"
        />
        <ParaText
          text="Sell All"
          className="text-neutral-700 font-sofia cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-2 gap-[10px] w-full">
        {isLoading ? (
          <div className="flex items-center w-full justify-center">
            <ClipLoader />
          </div>
        ) : (
          <>
            {users.map((user, index) => (
              <div
                className="flex justify-between items-center w-full"
                key={index}
              >
                <div
                  className="flex gap-2 relative items-center cursor-pointer"
                  onClick={() => navigate(`/${user.username}/`)}
                >
                  <img
                    src={user?.userProfile?.url || PlaceholderImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex gap-1 items-center">
                      <ParaText
                        className="font-sofia text-[16px]"
                        text={user.name}
                      />
                      {user.verified && (
                        <MdVerified size={13} className="text-blue-600" />
                      )}
                    </div>
                    <ParaText
                      className="font-sofia text-[15px] text-neutral-500 -translate-y-1"
                      text={user.username}
                    />
                  </div>
                </div>
                <ParaText
                  text="Follow"
                  className="font-sofia text-blue-600 cursor-pointer"
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Suggested;
