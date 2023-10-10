import {
  announcementsCreateSchema,
  announcementsReadSchema,
  announcementsSchema,
  announcementsUpdateSchema,
  userAdsSchema,
} from "../../schemas/announcements/announcements.schema";
import { z } from "zod";

export type IAnnouncements = z.infer<typeof announcementsSchema>;
export type IAnnouncementsCreate = z.infer<typeof announcementsCreateSchema>;
export type IAnnouncementsUpdate = z.infer<typeof announcementsUpdateSchema>;
export type IAnnouncementsRead = z.infer<typeof announcementsReadSchema>;
export type IUserAdsRead = z.infer<typeof userAdsSchema>;
