import { z } from "zod";

export const addressesSchema = z.object({
  id: z.number(),
  cep: z.string().max(9),
  state: z.string().max(2),
  city: z.string().max(28),
  street: z.string().max(45),
  number: z.number(),
  complement: z.string().max(50),
});

export const addressesCreate = addressesSchema.omit({ id: true });
export const addressesRead = addressesSchema.array();
