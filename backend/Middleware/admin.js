function AdminCheck(req,res,next){
    if(req.role == "admin"){
        console.log(req.role);
        next(); 

    }else{
        res.status(401).json({msg:"Oops! This action is for admins only."})
    }
}
export default AdminCheck