import { useSelector } from "react-redux";

const { Navigate } = require("react-router-dom")

const SellerProtectedRotue=({children})=>{
    const { isSeller,isLoading } = useSelector((state) => state.seller);
    if(isLoading===false){
        if(!isSeller){
            return <Navigate to="/shop-login" replace/>
        }
    }

    return children
}

export default SellerProtectedRotue;