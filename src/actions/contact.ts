"use server";

import { ContactSchema } from "@/schemas";
import { z } from "zod";

export const contact = (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  // console.log(values)
  return values
};
