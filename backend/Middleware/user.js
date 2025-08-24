function UserCheck(req,res,next){
    if(req.role == "user"){
        console.log(req.role);
        next();
    }else{
        res.status(401).json({ msg: "Oops! You need to be logged in as a user." });
    }
}
export default UserCheck