const {ValidateToken}=require("../services/authentication");
const cookieparser=require("cookie-parser");
function checkforAuthCookie(cookiename){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookiename]
            if(!tokenCookieValue){
               return  next();
            }
            try {
                const userpayload=ValidateToken(tokenCookieValue);
                req.user=userpayload;

            } catch(error){}
           return next(); 
    }
}
module.exports={
    checkforAuthCookie
}