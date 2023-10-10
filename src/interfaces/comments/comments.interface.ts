import { z } from "zod";
import { commentSchema, commentCreateSchema } from "../../schemas/comments/comment.schema";

export type IComment = z.infer<typeof commentSchema>;
export type ICommentCreate = z.infer<typeof commentCreateSchema>;
