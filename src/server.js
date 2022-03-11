import express from "express";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";
const app = express();

app.use(express.json());

app.use('/users',userRouter);
app.use('/posts',postRouter);

app.listen(3000);