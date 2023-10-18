import { Request, Response } from "express";
import { createUserService, deleteUserService, readUserByIdService, updateUserService } from "../../services/users/users.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;
  const userCreate = await createUserService(body);
  return res.status(201).json(userCreate);
};

export const readUserByIdController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const user = await readUserByIdService(id);

  return res.status(200).json(user);
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
