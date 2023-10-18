import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUserByIdController,
  updateUserController,
} from "../../controllers/users/users.controllers";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { userCreate, usersUpdate } from "../../schemas/users/users.schema";
import { idExists } from "../../middlewares/idExists.middleware";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
import { isTokenOwner } from "../../middlewares/isTokenOwner.middleware";

export const usersRoute: Router = Router();

usersRoute.post("", validatedBody(userCreate), createUserController);
usersRoute.get("/:id", verifyToken, idExists, readUserByIdController);
usersRoute.patch("/:id", verifyToken, idExists, isTokenOwner, validatedBody(usersUpdate), updateUserController);
usersRoute.delete("/:id", verifyToken, idExists, isTokenOwner, deleteUserController);
