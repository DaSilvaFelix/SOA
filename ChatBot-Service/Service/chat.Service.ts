import { IChatRepo } from "chatbot/repositories/chat.repo";
import { ChatInput } from "chatbot/types/msgUserTypes";
import { Output } from "chatbot/types/output";

export class ChatService implements IChatRepo {
  constructor(private readonly chatRepo: IChatRepo) {}

  async create(element: ChatInput): Promise<{ res: Output; response: Response }> {
    return await this.chatRepo.create(element);
  }
}
