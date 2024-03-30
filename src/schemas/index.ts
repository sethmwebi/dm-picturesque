import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "first name should be atleast three characters long",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "name must contain only alphabetical characters.",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "last name should be atleast three characters long",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "name must contain only alphabetical characters.",
    }),
  email: z
    .string()
    .min(1, { message: "please enter your email" })
    .email({ message: "please enter a valid email" }),
  subject: z.optional(
    z.string().max(20, "subject should be less than 20 characters long"),
  ),
  message: z
    .string()
    .min(5, { message: "Your message is too short!" })
    .max(500, {
      message: "Your message should not be more than 500 characters long",
    }),
});
