import { Announcement } from "../../entities";
import AppError from "../../error";
import { IAnnouncements, IAnnouncementsCreate, IAnnouncementsRead } from "../../interfaces/announcements/announcements.interface";
import announcementsRepositories from "../../repositories/announcements.repositories";

export const announcementCreateService = async (body: IAnnouncementsCreate): Promise<IAnnouncements> => {
  const announcement = announcementsRepositories.create(body);
  await announcementsRepositories.save(announcement);

  return announcement;
};

export const announcementReadService = async (): Promise<IAnnouncementsRead> => {
  return announcementsRepositories.find();
};

export const announcementReadByIdService = async (id: string): Promise<IAnnouncements | null> => {
  const announcement = await announcementsRepositories.findOneBy({ id: parseInt(id) });
  if (!announcement) {
    throw new AppError("Anúncio não existe", 404);
  }
  return announcement;
};

export const announcementUpdateService = async (id: string, body: IAnnouncementsCreate): Promise<IAnnouncementsCreate | null> => {
  announcementsRepositories.update(id, body);
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
