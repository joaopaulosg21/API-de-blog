import User from "../database/models/User.js";
import jsonwebtoken from "jsonwebtoken";

export default class UserController{

    async newUser(req,res){
        const {name,email,username,password} = req.body;
        try{
            await User.create({
                name,
                email,
                username,
                password
            });
            res.status(201).json({msg:"Usuario adicionado"});
        }catch(error){
            res.status(400).json({msg:error});
        }
    }
    async login(req,res){
        const {username,password} = req.body;
        try{
            const user = await User.findOne({where:{username:username,password:password}});
            if(user){
                const secret = "teste";
                const token = jsonwebtoken.sign({id:user.id},secret,{expiresIn:"1h"});
                res.status(200).json({msg:`Login feito com sucesso: token ${token}`});
            }else{
                res.status(404).json({msg:"Nome de usuario ou senha incorretos"});
            }
        }catch(error){
            res.status(500).json({msg:"Nenhum campo pode estar vazio"});
        }
    }
}