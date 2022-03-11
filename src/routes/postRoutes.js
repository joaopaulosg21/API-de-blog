import { Router } from "express";
import PostController from "../controllers/postController.js";
import checkToken from "../controllers/checkToken.js";
const postRouter = Router();
const post = new PostController();

postRouter.post('/add',checkToken,post.newPost)

postRouter.get('/',post.viewPosts);


export default postRouter;