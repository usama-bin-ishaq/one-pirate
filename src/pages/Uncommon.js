import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/Zone/LoginForm";
import Register from "../components/Zone/Register";
import Forgetpswrd from "../components/Zone/Forgetpswrd";
import VerifyCode from "../components/Zone/VerifyCode";
const Uncommon = () => {
  return (
    <div>
      <NavBar />
      <LoginForm />
      <Register />
      <Forgetpswrd />
      <VerifyCode />
    </div>
  );
};

export default Uncommon;
