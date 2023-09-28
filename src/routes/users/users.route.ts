import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../../controllers/users/users.controllers";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { userCreate, usersUpdate } from "../../schemas/users/users.schema";
import { idExists } from "../../middlewares/idExists.middleware";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
import { isTokenOwner } from "../../middlewares/isTokenOwner.middleware";

export const usersRoute: Router = Router();

usersRoute.post("", validatedBody(userCreate), createUserController);
usersRoute.get("/:id", idExists, readUserController);
usersRoute.patch("/:id", validatedBody(usersUpdate),idExists, verifyToken, isTokenOwner,updateUserController);
usersRoute.delete("/:id", idExists, verifyToken, isTokenOwner, deleteUserController);
