import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().optional().nullable(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const initSchema = z.object({
  plan: z.enum(['starter', 'professional', 'enterprise']),
  boxes: z.number().int().min(1).max(100),
});
