import express from "express";
import userRoute from "./Routes/userRoute.js";
import chatRoute from "./Routes/chatRoute.js";
import chatMessages from "./Routes/chatMessages.js";
import cors from "cors";
import dataBaseConnect from "./config/Connection.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dataBaseConnect();
const PORT = process.env.PORT || 4000;
//App Setup
app.listen(PORT, function () {
    console.log("server is listening at port", PORT);
})
app.use(cors());
app.use(express.json()) // to accept json data
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", chatMessages);
app.use(notFound)
app.use(errorHandler)        