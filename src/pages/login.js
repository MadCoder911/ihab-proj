import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Login = () => {
  const [registered, setRegistered] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    username: "",
    password: "",
  });
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    if (!userInfo) {
      return;
    } else {
      navigate("/profile");
    }
  }, []);
  const register = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:4000/register",
        withCredentials: true,
        headers: { "Content-Type": "application/json", credentials: "include" },
        data: JSON.stringify(loginInfo),
      });

      toast.success("You Have Been Registered");
      setLoginInfo({
        name: "",
        username: "",
        password: "",
      });
      setRegistered(true);
      console.log(document.cookie.username);
      return;
    } catch (error) {
      console.log(error);
      toast.error("Incorrect username or password.");
    }
  };
  const navigate = useNavigate();
  const login = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:4000/login",
        withCredentials: true,
        headers: { "Content-Type": "application/json", credentials: "include" },
        data: JSON.stringify(loginInfo),
      });
      console.log(data);
      localStorage.setItem("userData", JSON.stringify(data));
      toast.success("You Have Been Logged");
      window.location.reload();
      setRegistered(true);

      return;
    } catch (error) {
      console.log(error, "error");
      toast.error("Incorrect username or password.");
    }
  };
  return (
    <section className="flex flex-col">
      <div className="contactbg flex flex-col items-center">
        <div className="absolute top-[50%] left-[50%] lg:w-[30%] w-[80%] translate-x-[-50%] flex flex-col gap-[30px] translate-y-[-50%] p-[50px] rounded-md bg-[#ffffff6c]">
          {!registered && (
            <input
              value={loginInfo.name}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, name: e.target.value })
              }
              type="text"
              placeholder="Name"
              className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-40 pb-[7px] w-[100%]"
            />
          )}
          <input
            // value={loginInfo.username}
            // onChange={(e) =>
            //   setLoginInfo({ ...loginInfo, username: e.target.value })
            // }
            type="text"
            placeholder="Username"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-40 pb-[7px] w-[100%]"
          />
          <input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            type="text"
            placeholder="Password"
            className="bg-transparent text-white placeholder:text-[#ffffff] outline-none border-b border-nuetral-400 pb-[7px] w-[100%]"
          />
          {registered && (
            <button
              onClick={() => login()}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Login
            </button>
          )}
          {!registered && (
            <button
              onClick={() => register()}
              className="text-white bg-[#21c78f] p-2 rounded-md shadow-xl hover:scale-110 transition-all ease-in-out"
            >
              Register
            </button>
          )}
          {registered && (
            <p
              className="text-white text-[16px]"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              New user?{" "}
              <span className="underline cursor-pointer">Sign Up</span>
            </p>
          )}
          {!registered && (
            <p
              className="text-white text-[16px]"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              Existing User?{" "}
              <span className="underline cursor-pointer">Sign in</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
export default Login;
