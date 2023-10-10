import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
});

export const commentCreateSchema = commentSchema.omit({ id: true });
