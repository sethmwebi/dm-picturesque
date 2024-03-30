"use client";
import { ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { contact } from "@/actions/contact";
import { FormError } from "../common/form-error";

const Contact = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      contact(values);
    });
  };

  return (
    <section className="w-full my-12 md:my-20" id="contact">
      <h2 className="text-center text-4xl tracking-wide mb-8 md:mb-16">
        Contact
      </h2>
      <FormError message={error} />
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          method="post"
          action="https://formspree.io/f/mleqpwjj"
          className="w-[80%] mx-auto flex flex-col gap-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea {...field} required />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={
              isPending || Object.keys(form.formState.errors).length > 0
            }
            className="bg-muted text-primary hover:text-primary/50 hover:bg-primary/10"
          >
            {isPending ? "Submitting..." : "submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Contact;
