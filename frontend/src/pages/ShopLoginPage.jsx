import React, { useEffect } from 'react'
import {ShopLogin} from '../components/Shop/ShopLogin.jsx'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
export const ShopLoginPage = () => {
  const navigate = useNavigate()
  const {isSeller,seller,isLoading} = useSelector((state)=>state.seller);
  useEffect(()=>{
    if(isSeller===true){
      navigate(`/dashboard`)
    }
  },[isLoading,isSeller])
  return (
    <div>
        <ShopLogin/>
    </div>
  )
}
