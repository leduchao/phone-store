"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROUTE_PATHS } from "@/routes/routing";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

export default function SignUp() {
  const FormSchema = z.object({
    username: z.string().min(3, {
      message: "Username is required.",
    }),
    email: z
      .string()
      .min(3, {
        message: "Email is required.",
      })
      .email("This is not a valid email."),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, {
        message:
          "Password must be at least 6 characters long and include uppercase, lowercase, and a special character.",
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted:", data);
  }

  return (
    <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] content-center mx-auto">
      <h1 className="text-3xl font-bold">Create an account</h1>
      <p className="text-neutral-600 mt-2 mb-10">
        Enter your email below to create your account
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Create account
          </Button>

          <p className="text-center">
            Already have an account?{" "}
            <Link className="underline text-blue-600" href={ROUTE_PATHS.SignIn}>
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
