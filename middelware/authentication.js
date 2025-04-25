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
                res.locals.user=userpayload;

            } catch(error){
                console.warn("Invalid token:", error.message);
            }
           return next(); 
    }
}
module.exports={
    checkforAuthCookie
}