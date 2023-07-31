import React, { useState } from "react";
import { ClipLoader, HeaderOne, ParaText } from "../../../lib";
import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../redux/authSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.CAuth);
  const navigate = useNavigate();
  const isLoading = auth.registerStatus === "pending";
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  function Register() {
    if (isLoading) return null;
    dispatch(RegisterUser(user));
  }

  if (auth.userLoaded === true) {
    navigate("/");
  }

  return (
    <div className="flex w-full items-center relative h-[100%] flex-col">
      <HeaderOne text="Sign Up" className="font-sofia font-[600] text-[25px]" />
      <ParaText
        text="Find the hotest sexy lesbain here"
        className="text-neutral-500 font-sofia"
      />
      <div className="flex gap-2 flex-col mt-[2rem] w-[30%] max-[700px]:w-[90%] max-[1024px]:w-[50%]">
        <FormControl required>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormControl>
        <FormControl required>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormControl>
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
            to="/auth/login"
            className="text-blue-600 font-sofia hover:underline"
          >
            Have an account? Login
          </Link>
          <ParaText
            text={isLoading ? "..." : auth?.registerError}
            className="font-sofia text-red-600"
          />
        </div>
        <Button onClick={Register}>
          {isLoading ? <ClipLoader /> : "Sign Up"}
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
