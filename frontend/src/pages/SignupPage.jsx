import React, { useEffect } from 'react'
import  {Signup} from '../components/Signup/Signup.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const SignupPage = () => {
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state)=>state.user);
  useEffect(()=>{
    if(isAuthenticated===true){
      navigate("/")
    }
  })
  return (
    <div><Signup/></div>
  )
}
