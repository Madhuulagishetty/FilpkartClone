import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { loginUser, isAuthentication } = useContext(ContextData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "username" && password === "password") {
      console.log(isAuthentication, "before");

      loginUser(username);
      alert("Login successful");
      console.log(isAuthentication, "after");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    // if (isAuthentication) {
    //   navigate("/cartItems");
    // }
  }, [isAuthentication, navigate]);

  return (
    <div className=" text-black bg-gray-200">
      <form className="border flex  justify-center items-center h-[100vh] w-[100%]">
        <div
          className=" border-[4px] border-white flex flex-col p-10 gap-7 bg-white rounded-2xl "
          style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
        >
          <h1 className=" from-text text-center text-[30px] ">Log In</h1>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-[100%] h-[45px] min-w-[272px] p-2  rounded-3xl focus:outline-none focus:border-x-2 "
            style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-[100%] h-[45px] min-w-[272px] p-2  rounded-3xl focus:outline-none focus:border-x-2 "
            style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
            placeholder="Password"
          />
          <button type="button" onClick={handleLogin} className="login-button">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
