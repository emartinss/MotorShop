import { User } from "../../entities";
import { IUser, IUserById, IUserCreate, IUserReturn, IUserUpdate } from "../../interfaces/users/users.interface";
import addressRepositories from "../../repositories/address.repositories";
import usersRepositories from "../../repositories/users.repositories";
import { usersReturn, usersRead, usersUpdate, userCreate, userById } from "../../schemas/users/users.schema";

export const createUserService = async ({ address, ...body }: IUserCreate) => {
  const saveAddress = addressRepositories.create(address);
  await addressRepositories.save(saveAddress);

  const newUser = {
    address: saveAddress,
    ...body,
  };
  const user = usersRepositories.create(newUser);
  await usersRepositories.save(user);
  return usersReturn.parse(user);
};

export const readUserByIdService = async (id: string): Promise<IUserById> => {
  const user = await usersRepositories.findOneBy({ id: parseInt(id) });

  return userById.parse(user);
};

export const updateUserService = async (userBody: any, userId: User): Promise<IUserUpdate> => {
  const userUpdate = usersRepositories.create({ ...userId, ...userBody });
  await usersRepositories.save(userUpdate);

  return usersUpdate.parse(userUpdate);
};

export const deleteUserService = async (userId: User): Promise<void> => {
  await usersRepositories.remove(userId);
};
