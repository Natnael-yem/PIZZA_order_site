import { z } from 'zod';

export const customerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().regex(/^\d+$/),
  location: z.string().min(3),
});

export const validateCustomer = (data) => {
  return customerSchema.parse(data);
};
