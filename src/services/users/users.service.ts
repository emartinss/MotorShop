import { User } from "../../entities";
import usersRepositories from "../../repositories/users.repositories";
import { usersReturn, usersRead } from "../../schemas/users/users.schema";

export const createUserService = async (body: any) => {
  const newUser: any = usersRepositories.create(body);
  await usersRepositories.save(newUser);

  return usersReturn.parse(newUser);
};

export const readUserService = async () => {
  return usersRead.parse(await usersRepositories.find());
};

export const updateUserService = async (userBody:any, userId: User): Promise<any> => {
  const userUpdate = usersRepositories.create({ ...userId, ...userBody });
  await usersRepositories.save(userUpdate);

  return usersReturn.parse(userUpdate);
};

export const deleteUserService = async (userId: User): Promise<void> => {
  await usersRepositories.remove(userId);
};
