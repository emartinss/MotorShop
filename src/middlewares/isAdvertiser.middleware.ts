import { NextFunction, Request, Response } from "express";
import usersRepositories from "../repositories/users.repositories";
import AppError from "../error";

export const isAdvertiser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = res.locals.decoded.sub;
  const user = await usersRepositories.findOneBy({ id: parseInt(userId) });
  if (!user) {
    throw new AppError("user not found", 404);
  }
  if (!user.is_advertiser) {
    throw new AppError("You need to be an advertiser to be able to create ads", 403);
  }

  return next();
};
