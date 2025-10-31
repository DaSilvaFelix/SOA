import { IChatRepo } from "chatbot/repositories/chat.repo";
import { ChatInput } from "chatbot/types/msgUserTypes";
import { Output } from "chatbot/types/output";

export class RepoChat implements IChatRepo {
  async create(element: ChatInput): Promise<{ res: Output; response: Response }> {
    const response = await fetch("http://localhost:5678/webhook/chatBot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    });

    const res: Output = await response.json();

    return { res, response };
  }
}
