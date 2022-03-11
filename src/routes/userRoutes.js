import { Router } from "express";
import UserController from "../controllers/userController.js";
import checkToken from "../controllers/checkToken.js";
const userRouter = Router();
const user = new UserController();

userRouter.post('/add',user.newUser);

userRouter.post('/login',user.login);


export default userRouter;