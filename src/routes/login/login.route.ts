import { Router } from "express";
import { loginController } from "../../controllers/login/login.controllers";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { loginSchema } from "../../schemas/login/login.schema";

export const loginRoute: Router = Router();

loginRoute.post("", validatedBody(loginSchema),loginController);
