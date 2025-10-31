import { Router } from "express";
import { chat } from "chatbot/Controllers/basic.Controller";

const chatRouter = Router();

chatRouter.post("/chatBot", chat);

export default chatRouter;
