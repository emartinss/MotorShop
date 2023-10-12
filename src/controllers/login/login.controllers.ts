import { Request, Response } from "express";
import { loginService } from "../../services/login/login.service";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;

  const token = await loginService(body);

  return res.status(200).json(token);
};
