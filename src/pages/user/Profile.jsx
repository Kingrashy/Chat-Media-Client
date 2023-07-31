import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProfileUser } from "../../helper/fetch";
import { EditModal, UserHero, UserInfo } from "../../components";
import { StyledProfile } from "../../styles/pages/styled";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const auth = useSelector((state) => state.CAuth);
  useEffect(() => {
    const getUser = async () => {
      const data = await getProfileUser(username, auth?._id);
      setUser(data);
    };
    getUser();
  }, [auth?._id, username]);

  useEffect(() => {
    document.title = `${user.name} (@${username}) - HotLesbians`;
  });
  return (
    <StyledProfile>
      <UserHero user={user} />
      <UserInfo user={user} />
    </StyledProfile>
  );
};

export default Profile;
