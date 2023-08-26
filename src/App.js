import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Chat, CurrentChat, Home, Login, Profile, SignUp } from "./pages";
import {
  EditModal,
  MobileNav,
  MoreModeal,
  PostModal,
  SideBar,
  SubscripModal,
} from "./components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NotValid from "./pages/NotVip";
import { getUser } from "./helper/fetch";
import Access from "./pages/Access";

function App() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.CAuth);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const getuser = async () => {
  //     const data = await getUser(auth);
  //     setUser(data);
  //   };
  //   getuser();
  // }, []);

  // useEffect(() => {
  //   if (auth?.userLoaded) {
  //     navigate("/");
  //   } else {
  //     navigate("/auth/login");
  //   }
  // }, [auth?.userLoaded]);

  return (
    <div className="relative w-full flex max-[700px]:flex-col justify-between h-full">
      <ToastContainer />
      {/* {!user?.isAdmin ? <NotValid /> : ""} */}
      <SideBar />
      <Routes>
        <Route path="/" element={<Access />} />
        {/* <Route path="/subscribe/hotles" element={<NotValid />} /> */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/:username/" element={<Profile />} />
        <Route path="/direct/indox/" element={<Chat />} />
        <Route path="/direct/indox/:chatId" element={<CurrentChat />} />
      </Routes>
      <SubscripModal />
      <EditModal />
      <PostModal />
      <MoreModeal />
      {/* <MobileNav /> */}
    </div>
  );
}

export default App;
