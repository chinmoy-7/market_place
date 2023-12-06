import React from "react";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/style";
import { HiOutlineShoppingBag, HiReceiptRefund } from "react-icons/hi";
import { AiOutlineCreditCard, AiOutlineInbox, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { MdOutlineTrackChanges} from "react-icons/md";
import axios from 'axios'
import { TbAddressBook} from "react-icons/tb";
import {toast} from 'react-toastify'
import {server} from '../../server'
export const ProfileSidebar = ({ active, setActive }) => {
  const navigate = useNavigate();
  const logoutHandler=()=>{
    axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
      toast.success(res?.data.message)
      window.location.reload(true)
      navigate("/login")
    }).catch((error)=>{
      console.log(error.reponse?.data.message)
    })
  }
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
        {/* Profile */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span className={`pl-3 ${active === 1 ? "text-[red]" : ""} 800px:block hidden`}>
          Profile
        </span>
      </div>
      {/* Orders */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span className={`pl-3 ${active === 2 ? "text-[red]" : ""} 800px:block hidden`}>
          Orders
        </span>
      </div>
      {/* Refunds */}
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span className={`pl-3 ${active === 3 ? "text-[red]" : ""}`}>
          Refunds
        </span>
      </div> */}
      {/* Inbox */}
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span className={`pl-4 ${active === 4 ? "text-[red]" : ""}`}>
          Inbox
        </span>
      </div> */}
      {/* Track Order */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)  }
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span className={`pl-5 ${active === 5 ? "text-[red]" : ""} 800px:block hidden`}>
          Track Order
        </span>
      </div>
      {/* Payment Methods */}
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)  }
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span className={`pl-6 ${active === 6 ? "text-[red]" : ""}`}>
          Payment Methods
        </span>
      </div> */}
      {/* Address */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)  }
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span className={`pl-7 ${active === 7 ? "text-[red]" : ""} 800px:block hidden`}>
          Address
        </span>
      </div>
      {/* Logout */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8)|| logoutHandler()  }
      >
        <AiOutlineLogout size={20} color={active === 8 ? "red" : ""} />
        <span className={`pl-8 ${active === 8 ? "text-[red]" : ""} 800px:block hidden`}>
          Logout
        </span>
      </div>
    </div>
  );
};
