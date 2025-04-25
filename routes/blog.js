const {Router}=require("express");
const router=Router();
const path=require("path");
const multer=require("multer");
const Blog=require("../models/blog")
const Comments=require("../models/comments")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads'));
    },
    filename: function (req, file, cb) {
       const fileName=`${Date.now}-${file.originalname}` ;
       cb(null,fileName)
    }
  })
  
  const upload = multer({ storage: storage })


router.get("/add-new",(req,res)=>{
 
    return res.render('Addblog',{
        user:req.user })
})
router.get("/:id",async(req,res)=>{
  const blog =await  Blog.findById(req.params.id).populate("createdBy");
  const Comment=await Comments.find({blogId:req.params.id}).populate("createdBy");
  console.log("blog",blog)
  return res.render("blog",{
    user:req.user,
    blog,
    Comment,
  })
})
router.post("/",upload.single('coverImageUrl'),async(req,res)=>{
    const {title,body,}=req.body
    const blog=await Blog.create({
            body,
            title,
            createdBy:req.user._id,
            coverImageUrl:`/uploads/${req.file.filename}`
        })
    return res.redirect(`/blog/${blog._id}`);
})
router.post("/comment/:blogId",async(req,res)=>{
  const comments=await Comments.create({
    content:req.body.content,
    blogId:req.params.blogId,
    createdBy:req.user._id,
  })
  return res.redirect(`/blog/${req.params.blogId}`);
})


module.exports=router;