import React, { useEffect } from "react";
import { HeaderOne } from "../../lib";
import { Link } from "react-router-dom";
import { SignUpForm } from "../../components";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - HotLesbians";
  });
  return (
    <div className="flex w-full h-full relative p-[2rem] flex-col gap-[3rem] max-[700px]:p-[10px]">
      <div className="flex">
        <Link to="/">
          <HeaderOne
            text="HotLesbians"
            className="font-lobstar text-[23px] max-[700px]:text-[21px]"
          />
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
