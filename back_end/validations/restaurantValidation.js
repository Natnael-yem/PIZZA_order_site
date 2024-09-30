import { z } from 'zod';

export const customerSchema = z.object({
  admin_name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().regex(/^\d+$/),
  restaurant_name: z.string().min(3),
  location: z.string().min(3),
  logo: z.any()
});

export const validateAdmin = (data) => {
  return customerSchema.parse(data);
};
