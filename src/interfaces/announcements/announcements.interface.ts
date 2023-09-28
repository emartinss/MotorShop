import { announcementsCreateSchema, announcementsReadSchema, announcementsSchema } from "../../schemas/announcements/announcements.schema";
import { z } from "zod";

export type IAnnouncements = z.infer<typeof announcementsSchema>;
export type IAnnouncementsCreate = z.infer<typeof announcementsCreateSchema>;
export type IAnnouncementsRead = z.infer<typeof announcementsReadSchema>;
