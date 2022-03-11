import Post from "../database/models/Post.js";
import User from "../database/models/User.js";
import jsonwebtoken from "jsonwebtoken";

export default class PostController{

    async newPost(req,res){
        const {title,text} = req.body;
        const secret = "teste";
        const token = req.headers['authorization'].split(' ')[1];
        const decoded = jsonwebtoken.verify(token,secret);
        try{
            const user = await User.findByPk(decoded.id);
             await Post.create({
                title:title,
                text:text,
                author_id:user.dataValues.id
            });
            res.status(201).json({msg:"Novo post adicionado"});
        }catch(error){
            res.status(500).json({msg:"Erro no servidor"});
        }
    }

    async viewPosts(req,res){
        try{
            const posts = await Post.findAll();
            res.status(200).json(posts);
        }catch(error){
            res.status(500).json({msg:"Erro no servidor"});
        }
    }

    async myPosts(req,res){
        const secret = "teste";
        const token = req.headers['authorization'].split(' ')[1];
        const decoded = jsonwebtoken.verify(token,secret);
        try{
            const user = await User.findByPk(decoded.id);
            const total = await Post.findAndCountAll({where:{author_id:user.dataValues.id}});
            if(total.count > 0 ){
                const posts = await Post.findAll({where:{author_id:user.dataValues.id}});
                res.status(200).json(posts);
            }else{
                res.status(404).json({msg:"Você não possui posts cadastrados"})
            }
        }catch(error){
            res.status(500).json({msg:"Erro no servidor"});
        }
    }
}