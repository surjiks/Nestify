import jwt from 'jsonwebtoken'

function authenticate(req,res,next){
    const cookie = req.headers.cookie
    if(cookie){
        const [name,token] = cookie.trim().split('=');
        if(name=='authToken'){
            const decode = jwt.verify(token,process.env.SECRET_KEY)
            req.name = decode.UserName
            req.role = decode.UserRole
            next();
        }else{
            res.status(401).json({ msg: "unauthorised acess" });
        }
    }else{
        res.status(401).json({ msg: "cookie not found!!!" });
    }
}

export default authenticate