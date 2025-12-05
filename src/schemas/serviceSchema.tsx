import {z} from "zod";

export const serviceSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    timeInMinutes: z.number(),
})

export const loaderSchema = z.array(serviceSchema)

export type Service = z.infer<typeof serviceSchema>;

export type Services = z.infer<typeof loaderSchema>;