import { Schema, model } from "mongoose";
import { Chat } from "chatbot/types/msgTypes";

const ChatSchema = new Schema<Chat>({
  sessionId: { type: String, required: true },
  messages: [
    {
      type: {
        type: String,
        enum: ["human", "ai"],
        required: true,
      },
      data: {
        type: new Schema(
          {
            id_secccion: { type: String },
            id_user: { type: String },

            content: { type: String },
            tool_calls: { type: [Schema.Types.Mixed], default: [] },
            invalid_tool_calls: { type: [Schema.Types.Mixed], default: [] },
            additional_kwargs: { type: Schema.Types.Mixed, default: {} },
            response_metadata: { type: Schema.Types.Mixed, default: {} },
          },
          { _id: false }
        ),
        required: true,
      },
    },
  ],
});

export const ChatModel = model("chatbot_memory", ChatSchema);
