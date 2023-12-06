import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
export const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await axios
    .post(
      `${server}/user/login-user`,
      {
        email,
        password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      navigate("/");
      window.location.reload(true); 
      toast.success("Login Success!");

    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sx:px-6 lg:px-8">
      <div className="sm:max-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:max-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="mt-1 ">
            <div>
              <label
                htmlFor="email "
                className="block text-sm text-gray-700 font-medium"
              >
                Email Address
              </label>
            </div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500 text-sm"
              />
            </div>
            <div className="mt-1 relative">
              <div>
                <label
                  htmlFor="password "
                  className="block text-sm text-gray-700 font-medium"
                >
                  Password
                </label>
              </div>
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="currrent-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500 text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-6 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-6 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:rin-blue-500 border-gray-500 rounded-sm"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm  text-gray-900"
                >
                  {" "}
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                {/* <input type="checkbox" name="remember-me" id="remember-me" className="h-4 w-4 text-blue-600 focus:rin-blue-500 border-gray-500 rounded-sm"/> */}
                <a
                  href=".forgot-password"
                  className="text-blue-600 font-medium hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px]  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Need an account?</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
