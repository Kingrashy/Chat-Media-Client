import React, { useState } from "react";
import { ClipLoader, HeaderOne, ParaText } from "../../../lib";
import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.CAuth);
  const navigate = useNavigate();
  const isLoading = auth.loginStatus === "pending";
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function Login() {
    if (isLoading) return null;
    dispatch(loginUser(user));
  }
  if (auth.userLoaded === true) {
    navigate("/");
  }
  return (
    <div className="flex w-full items-center relative h-[100%] flex-col">
      <HeaderOne
        text="Login to your account"
        className="font-sofia font-[600] text-[25px]"
      />
      <div className="flex gap-2 flex-col mt-[2rem] w-[30%] max-[700px]:w-[90%] max-[1024px]:w-[50%]">
        <FormControl required>
          <FormLabel>Useranme</FormLabel>
          <Input
            type="username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </FormControl>
        <FormControl required>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormControl>
        <div className="flex justify-between items-center">
          <Link
            to="/auth/sign-up"
            className="text-blue-600 font-sofia hover:underline"
          >
            Dont have an account? Sign up
          </Link>
          <ParaText
            text={isLoading ? "..." : auth?.loginError}
            className="font-sofia text-red-600"
          />
        </div>
        <Button onClick={Login}>{isLoading ? <ClipLoader /> : "Login"}</Button>
      </div>
    </div>
  );
};

export default LoginForm;
