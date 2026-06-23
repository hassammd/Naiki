import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  //toggle form

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <SignIn toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </>
  );
};

export default Auth;
