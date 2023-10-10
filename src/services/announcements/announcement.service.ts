import AppError from "../../error";
import {
  IAnnouncements,
  IAnnouncementsCreate,
  IAnnouncementsRead,
  IUserAdsRead,
} from "../../interfaces/announcements/announcements.interface";
import announcementsRepositories from "../../repositories/announcements.repositories";
import usersRepositories from "../../repositories/users.repositories";
import { announcementsSchema, userAdsSchema } from "../../schemas/announcements/announcements.schema";

export const announcementCreateService = async (body: IAnnouncementsCreate, userId: string): Promise<IAnnouncements | null> => {
  const user = await usersRepositories.findOne({ where: { id: parseInt(userId) } });
  if (!user) {
    throw new AppError("user not found", 404);
  }
  const announcement = announcementsRepositories.create({ ...body, user: user });
  await announcementsRepositories.save(announcement);
  return announcementsSchema.parse(announcement);
};

export const announcementReadService = async (): Promise<IAnnouncementsRead> => {
  const announcement = await announcementsRepositories.find();
  return announcement;
};

export const announcementReadByIdService = async (id: string): Promise<IAnnouncements | null> => {
  const announcement = await announcementsRepositories.findOneBy({ id: parseInt(id) });
  if (!announcement) {
    throw new AppError("announcement not found", 404);
  }
  return announcement;
};

export const getUserAdsService = async (userId: string): Promise<IUserAdsRead | null> => {
  const user = await usersRepositories.findOne({
    where: { id: parseInt(userId) },
    relations: { announcements: true },
  });
  if (!user) {
    throw new AppError("user not found", 404);
  }

  return userAdsSchema.parse(user);
};

export const announcementUpdateService = async (id: string, body: IAnnouncementsCreate): Promise<IAnnouncementsCreate | null> => {
  await announcementsRepositories.update(id, body);
  const updatedAnnouncement = await announcementsRepositories.findOneBy({ id: parseInt(id) });

  return updatedAnnouncement;
};

export const announcementDeleteService = async (id: string): Promise<void> => {
  const announcement = await announcementsRepositories.findOneBy({ id: parseInt(id) });
  if (!announcement) {
    throw new AppError("announcement not found", 404);
  }
  await announcementsRepositories.remove(announcement);
};
