import { Request, Response } from "express";
import { IAnnouncements } from "../../interfaces/announcements/announcements.interface";
import {
  announcementCreateService,
  announcementDeleteService,
  announcementReadByIdService,
  announcementReadService,
  announcementUpdateService,
  getUserAdsService,
} from "../../services/announcements/announcement.service";

export const announcementsCreateController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;
  const id = res.locals.decoded.sub;
  const announcement = await announcementCreateService(body, id);

  return res.status(201).json(announcement);
};

export const announcementReadController = async (req: Request, res: Response): Promise<Response> => {
  const announcement = await announcementReadService();

  return res.status(200).json(announcement);
};

export const announcementReadByIdController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const announcement = await announcementReadByIdService(id);
  return res.status(200).json(announcement);
};

export const getUserAdsController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const announcement = await getUserAdsService(id);
  return res.status(200).json(announcement);
};

export const announcementUpdateController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const body = res.locals.validated;
  const announcement = await announcementUpdateService(id, body);

  return res.status(201).json(announcement);
};

export const announcementDeleteController = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const announcement = await announcementDeleteService(id);

  res.status(204).json();
};
