import { Router } from "express";
import {
  announcementDeleteController,
  announcementReadByIdController,
  announcementReadController,
  announcementUpdateController,
  announcementsCreateController,
  getUserAdsController,
} from "../../controllers/announcements/announcements.controller";
import { announcementReadService } from "../../services/announcements/announcement.service";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { announcementsCreateSchema, announcementsUpdateSchema } from "../../schemas/announcements/announcements.schema";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
import { isAdvertiser } from "../../middlewares/isAdvertiser.middleware";

export const announcementRoute: Router = Router();

announcementRoute.post("", verifyToken, isAdvertiser, validatedBody(announcementsCreateSchema), announcementsCreateController);
announcementRoute.get("", announcementReadController);
announcementRoute.get("/advertiser/:id", getUserAdsController);
announcementRoute.get("/:id", announcementReadByIdController);
announcementRoute.patch("/:id", verifyToken, validatedBody(announcementsUpdateSchema), announcementUpdateController);
announcementRoute.delete("/:id", verifyToken, announcementDeleteController);
