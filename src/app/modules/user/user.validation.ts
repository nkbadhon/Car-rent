import { z } from 'zod';

export const createuserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email(),
    role: z.enum(['admin', 'user']),
    password: z
      .string()
      .min(1, 'Password is required')
      .max(20, 'Password cannot be more than 20 characters'),
    phone: z.string(),
    address: z.string(),
    isDeleted: z.boolean().default(false),
  }),
});
