//create token and saving it in cookies

const sendShopToken=async (user,statusCode,res)=>{
    const token = await user.getJwtToken();

    //options for cookies
    const options={
        expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:true
    }

    res.status(statusCode).cookie("seller_token",token,options).json({
        success:true,
        user,
        token
    })
}

module.exports=sendShopToken