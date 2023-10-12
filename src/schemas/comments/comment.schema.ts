import { z } from "zod";
import { announcementsSchema } from "../announcements/announcements.schema";

export const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
});

export const commentReturnSchema = z.object({
  id: z.number(),
  comment: z.string(),
  announcement: announcementsSchema,
});
export const commentCreateSchema = commentSchema.omit({ id: true });
