import { users, userCreate, usersRead, usersReturn, usersUpdate, userById } from "../../schemas/users/users.schema";
import { z } from "zod";

export type IUser = z.infer<typeof users>;
export type IUserCreate = z.infer<typeof userCreate>;
export type IUserReturn = z.infer<typeof usersReturn>;
export type IUserRead = z.infer<typeof usersRead>;
export type IUserUpdate = z.infer<typeof usersUpdate>;
export type IUserById = z.infer<typeof userById>