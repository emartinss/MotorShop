import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import announcementsRepositories from "../repositories/announcements.repositories";
import usersRepositories from "../repositories/users.repositories";

export const isTokenOwner = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { decoded } = res.locals;
  if (decoded.sub !== req.params.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export const isTokenOwnerComment = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { decoded } = res.locals;
  const user = await usersRepositories.findOneBy({ id: parseInt(req.params.userId) });
  
  if (!user) {
    throw new AppError("user not found", 403);
  }

  if (decoded.sub !== req.params.userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export const isTokenOwnerOrAdvertiser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { decoded } = res.locals;
  const announcement = await announcementsRepositories.findOne({ where: { id: parseInt(req.params.id) }, relations: { user: true } });
  if (decoded.sub != announcement?.user.id) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
