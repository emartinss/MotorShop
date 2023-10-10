import AppError from "../../error";
import { IComment, ICommentCreate } from "../../interfaces/comments/comments.interface";
import announcementsRepositories from "../../repositories/announcements.repositories";
import commentsRepositories from "../../repositories/comments.repositories";
import usersRepositories from "../../repositories/users.repositories";
import { commentSchema } from "../../schemas/comments/comment.schema";

export const addCommentService = async (body: ICommentCreate, adId: string, userId: string) => {
  const announcement = await announcementsRepositories.findOneBy({ id: parseInt(adId) });
  if (!announcement) {
    throw new AppError("anannouncement not found", 404);
  }
  const user = await usersRepositories.findOneBy({ id: parseInt(userId) });
  if (!user) {
    throw new AppError("user not found", 404);
  }
  const comment = commentsRepositories.create({ ...body, announcements: announcement, user: user });
  await commentsRepositories.save(comment);
  return commentSchema.parse(comment);
};

export const getAdCommentsService = async (id: string) => {
  const comments = await announcementsRepositories.findOne({
    where: { id: parseInt(id) },
    relations: { comment: true },
  });
  if (!comments) {
    throw new AppError("comments not found", 404);
  }
  return comments;
};

export const updateCommentService = async (id: string, body: ICommentCreate): Promise<IComment | null> => {
  await commentsRepositories.update(id, body);
  const updateComment = await commentsRepositories.findOneBy({ id: parseInt(id) });

  return updateComment;
};

export const deleteCommentService = async (id: string): Promise<void> => {
  const comment = await commentsRepositories.findOneBy({ id: parseInt(id) });
  if (!comment) {
    throw new AppError("comment not found", 404);
  }
  await commentsRepositories.remove(comment);
};
