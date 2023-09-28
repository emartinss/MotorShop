import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validatedBody =
  (schema: z.AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validated = schema.parse(req.body);
    res.locals = { ...res.locals, validated };

    return next();
  };


