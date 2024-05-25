import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .trim()
    .min(4, { message: 'Password is required' })
    .max(20, { message: 'Password cannot exceed 20 characters' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
