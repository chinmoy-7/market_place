import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { server } from '../server';

export const SellerActivationPage = () => {
    const {activation_token}=useParams();
    const [error,setError]=useState(false);
    // console.log(activation_token)
    useEffect(()=>{
        if(activation_token){
            console.log(activation_token)
            const activationEmail=async ()=>{
                try{
                    const res = await axios.post(`${server}/shop/activation`,{
                        activation_token
                    })
                    console.log(res.data.message)
                }catch(error){
                    // console.log(error.response.data.message)
                    setError(true)
                }

            }
            activationEmail();
        }
    },[])
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }}>
        {error?
            (<p>Your Token has expired</p>)
        :(<p>Your account is Successfully created</p>)}
    </div>
  )
}
