import { ChatInput } from "chatbot/types/msgUserTypes";
import { Output } from "chatbot/types/output";

export interface IChatRepo {
  create(element: ChatInput): Promise<{ res: Output; response: Response }>;
}
