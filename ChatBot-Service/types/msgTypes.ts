import { Types } from "mongoose";

export interface Chat {
  _id: Types.ObjectId;
  sessionId: string;
  messages: {
    type: "human" | "ai";
    data:
      | {
          id_secccion: string;
          id_user: string;
          additional_kwargs: Record<string, unknown>;
          response_metadata: Record<string, unknown>;
        }
      | {
          content: string;
          tool_calls: unknown[];
          invalid_tool_calls: unknown[];
          additional_kwargs: Record<string, unknown>;
          response_metadata: Record<string, unknown>;
        };
  }[];
}
