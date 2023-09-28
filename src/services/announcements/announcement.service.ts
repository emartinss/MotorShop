import { Announcement } from "../../entities";
import AppError from "../../error";
import { IAnnouncements, IAnnouncementsCreate, IAnnouncementsRead } from "../../interfaces/announcements/announcements.interface";
import announcementsRepositories from "../../repositories/announcements.repositories";

export const announcementCreateService = async (body: IAnnouncementsCreate): Promise<IAnnouncements | null> => {
  const announcement = announcementsRepositories.create(body);
  await announcementsRepositories.save(announcement);

  return announcement;
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

export const announcementUpdateService = async (id: string, body: IAnnouncementsCreate): Promise<IAnnouncementsCreate | null> => {
  await announcementsRepositories.update(id, body);
  const updatedAnnouncement = await announcementsRepositories.findOneBy({ id: parseInt(id) });

  return updatedAnnouncement;
};

export const announcementDeleteService = async (id: string): Promise<void> => {
  const announcement = await announcementsRepositories.findOneBy({ id: parseInt(id) });
  if (!announcement) {
    throw new AppError("Anúncio não existe", 404);
  }
  await announcementsRepositories.remove(announcement);
};
