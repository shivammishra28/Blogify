const express=require("express");
const router=express.Router();
const User=require("../models/user")

router.get("/signin",(req,res)=>{
    return res.render("signin")
});
router.get("/signup",(req,res)=>{
    return res.render("signup")
});

router.post("/signup",async(req,res)=>{
    const {fullName,email,password}=req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");

})
router.post("/signin",async(req,res)=>{
         const{email,password}=req.body;
//    
try {
    const token= await User.matchpasswordAndGenerateToken(email,password);
    // console.log("token",token);

    const user = await User.findOne({ email });
    res.locals.user = user;

    return res.cookie("token",token).redirect("/");


} catch (error) {
    return res.render('signin',{
        error:"Incorrect Email or Password"
    })

}


})
router.get("/logout",(req,res)=>{
    return res.clearCookie("token").redirect("/")
})

module.exports=router;