import { z } from "zod";

export const announcementsSchema = z.object({
  id: z.number(),
  brand: z.string().max(45),
  model: z.string().max(45),
  year: z.string(),
  fuel: z.string().max(20),
  mileage: z.number(),
  color: z.string().max(35),
  fipe: z.number(),
  price: z.number(),
  description: z.string(),
});

export const announcementsCreateSchema = announcementsSchema.omit({ id: true });
export const announcementsUpdateSchema = announcementsCreateSchema.partial()
export const announcementsReadSchema = announcementsSchema.array()
