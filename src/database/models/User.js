import sequelize from "../conexao.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default User;

/* User.sync({force:true}); */