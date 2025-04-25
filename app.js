require('dotenv').config();
const express=require("express");
const path=require("path")
const app=express();
const PORT =process.env.PORT || 8000;
const userRouter=require("./routes/user")
const blogrouter =require("./routes/blog")
const mongoose=require("mongoose")
const cookieparser=require("cookie-parser");
const {checkforAuthCookie}=require("./middelware/authentication")
const Blog=require("./models/blog")

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Mongodb Connected");
  }).catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });
  
  


app.use(express.static(path.resolve('./public')))

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:true}))
app.use(cookieparser());
app.use(checkforAuthCookie("token"));
app.get("/",async(req,res)=>{
    const allBlogs =await Blog.find({})
    return res.render("home",{
        user:req.user,
        blogs:allBlogs
    });
})
app.use("/user",userRouter);
app.use("/blog",blogrouter)

app.listen(PORT,()=> console.log(`Server Started At PORT:${PORT}`));