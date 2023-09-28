import { Router } from "express";
import {
  announcementDeleteController,
  announcementReadByIdController,
  announcementUpdateController,
  announcementsCreateController,
} from "../../controllers/announcements/announcements.controller";
import { announcementReadService } from "../../services/announcements/announcement.service";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { announcementsCreateSchema, announcementsUpdateSchema } from "../../schemas/announcements/announcements.schema";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
import { isTokenOwner } from "../../middlewares/isTokenOwner.middleware";
import { isAdvertiser } from "../../middlewares/isAdvertiser.middleware";

export const announcementRoute: Router = Router();

announcementRoute.post("", verifyToken, isAdvertiser, validatedBody(announcementsCreateSchema), announcementsCreateController);
announcementRoute.get("", announcementReadService);
announcementRoute.get("/:id", announcementReadByIdController);
announcementRoute.patch("/:id", verifyToken, isTokenOwner, validatedBody(announcementsUpdateSchema), announcementUpdateController);
announcementRoute.delete("/:id", verifyToken, isTokenOwner, announcementDeleteController);
