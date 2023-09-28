import { NextFunction, Request, Response } from "express";
import AppError from "../error";

export const isTokenOwner = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { decoded } = res.locals;

  if (decoded.sub !== req.params.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
