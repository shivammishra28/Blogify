const JWT =require("jsonwebtoken");

const secret= process.env.JWT_SECRET;

function creteTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageUrl:user.profileImageUrl,
        fullName: user.fullName,
        role:user.role,
    };
    const token =JWT.sign(payload,secret);
    return token;
}
function ValidateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}
module.exports={
    creteTokenForUser,
    ValidateToken
}