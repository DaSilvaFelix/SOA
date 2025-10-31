import { RepoChat } from "chatbot/repoChat/chat_mongo_repo";
import { ChatService } from "chatbot/Service/chat.Service";
import { ChatInput } from "chatbot/types/msgUserTypes";
import type { Request, Response } from "express";

const chatRepo = new RepoChat();
const chatService = new ChatService(chatRepo);

const chat = async (req: Request, resp: Response) => {
  const msg: ChatInput = req.body;

  const { res, response } = await chatService.create(msg);

  if (!response.ok) return resp.status(500).json({ msg: "no se pudo realiza comunicación con el chatBot" });

  return resp.status(200).json(res);
};

export { chat };
