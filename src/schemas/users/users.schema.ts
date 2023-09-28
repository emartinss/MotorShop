import { z } from "zod";
import { addressesSchema } from "../address/address.schema";

export const users = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(90),
  // confirm_password: z.string().max(90),
  cpf: z.string().max(11),
  phone: z.string().max(11),
  date_of_birth: z.string().max(10),
  description: z.string(),
  is_advertiser: z.boolean(),
  // address: addressesSchema,
});

export const userCreate = users.omit({ id: true });
export const usersReturn = users.omit({ password: true, cpf: true });
export const usersRead = z.array(usersReturn);
export const usersUpdate = users.omit({ id: true, is_advertiser: true, cpf: true }).partial();
