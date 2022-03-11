import jsonwebtoken from "jsonwebtoken";

export default function checkToken(req,res,next){
    if(req.headers['authorization']){
        const secret = "teste";
        const token = req.headers['authorization'].split(' ')[1];
        try{
            jsonwebtoken.verify(token,secret);
            next()
        }catch(error){
            res.status(401).json({msg:"Token invalido"});
        }
    }else{
        res.status(401).json({msg:"Você não está logado"});
    }
}