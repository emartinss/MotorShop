import { Request, Response } from "express";
import { createUserService, deleteUserService, readUserService, updateUserService } from "../../services/users/users.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;
  const userCreate = await createUserService(body);
  return res.status(201).json(userCreate);
};

export const readUserController = async (req: Request, res: Response): Promise<Response> => {
  const users = await readUserService();

  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const userBody = res.locals.validated;
  const updateUser = await updateUserService(userBody, res.locals.foundEntity);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserService(res.locals.foundEntity);

  return res.status(204).json();
};
