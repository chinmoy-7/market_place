import { useSelector } from "react-redux";
import { Loader } from "../components/Layout/Loader";

const { Navigate } = require("react-router-dom")

const SellerProtectedRotue=({children})=>{
    const { isSeller,isLoading } = useSelector((state) => state.seller);
    if(isLoading===true){
        return (<Loader/>)
    }else{
    if(!isSeller){
        return <Navigate to="/shop-login" replace/>
    }
}   

    return children
}

export default SellerProtectedRotue;