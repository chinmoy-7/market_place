import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { server } from "../../server";
import { toast } from "react-toastify";
export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [visible, setVisible] = useState();
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {headers:{"Content-Type":"multipart/formdata"}}
    const newForm = new FormData();
    
    newForm.append("file",avatar);
    newForm.append("name",name)
    newForm.append("email",email)
    newForm.append("password",password)
    // console.log(server)
    axios.post(`${server}/user/create-user`,newForm,config).then((res)=>{
      toast.success(res.data.message)
      setEmail("")
      setName("")
      setPassword("")
      setAvatar()
    }).catch(err=>{
      toast.error(err.response.data.message)
      console.log(err.response.data.message)
    })
  };

  const handleFileInputChange = (e) => {
    console.log("working")
    const file = e.target.files[0];
    console.log(file)
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sx:px-6 lg:px-8">
      <div className="sm:max-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register your account
        </h2>
      </div>
      <div className="mt-8 sm:max-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-1 ">
              <div>
                <label
                  htmlFor="name "
                  className="block text-sm text-gray-700 font-medium"
                >
                  Full Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500 text-sm"
              />
            </div>

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
              {/* {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )} */}
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt=""
                      className="h-full w-full object-cover rounded-e-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                  htmlFor="file-input"
                >
                  <span>Upload a file</span>
                </label>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpeg,.jpg,.png"
                    className="sr-only"
                    onChange={handleFileInputChange}
                  />
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
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
