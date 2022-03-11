import { DataTypes } from "sequelize";
import sequelize from "../conexao.js";
import User from "./User.js";

const Post = sequelize.define('posts',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    author_id:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    }
});
/* Post.sync({force:true}); */
export default Post;