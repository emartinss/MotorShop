import { compare } from "bcryptjs";
import AppError from "../../error";
import { sign } from "jsonwebtoken";
import { User } from "../../entities";
import usersRepositories from "../../repositories/users.repositories";
import { IToken } from "../../interfaces/login/login.interfaces";

export const loginService = async (loginData: any): Promise<IToken> => {
  const user: User | null = await usersRepositories.findOneBy({ email: loginData.email });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePassword: boolean = await compare(loginData.password, user.password);
  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }
  const token: string = sign({ email: user.email }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};
