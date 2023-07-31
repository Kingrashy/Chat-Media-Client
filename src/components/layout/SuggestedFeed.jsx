import React, { useEffect, useState } from "react";
import { ParaText } from "../../lib";
import { getUsers } from "../../helper/fetch";
import SuggestedItem from "../user/SuggestedItem";

const SuggestedFeed = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    getusers();
  }, []);
  return (
    <div className="flex flex-col gap-3 w-full h-[200px]">
      <ParaText text="Suggested" className="font-sofia text-neutral-500" />
      <div className="flex gap-2">
        {users.map((user, index) => {
          <SuggestedItem user={user} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SuggestedFeed;
