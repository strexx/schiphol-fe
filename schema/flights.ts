import { z } from 'zod'

export const flightsSchema = z.object({
  search: z.string().min(3).optional(), // Search must be a string with at least 3 characters
  limit: z.string().regex(/^\d+$/).optional() // Limit must be a string representing a number
})
