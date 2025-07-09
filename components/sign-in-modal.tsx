"use client";

import { useForm } from "react-hook-form";
import BaseModal from "./base/base-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { SignInRequest, signInSchema } from "@/schemas/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInModal() {
  const form = useForm<SignInRequest>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSave = async () => {
    const isValid = await form.trigger();
    if (!isValid) return false;

    const data = form.getValues();
    console.log("Validated data:", data);
    form.reset();
    return true;
  };

  return (
    <BaseModal
      title="Đăng nhập"
      type="form"
      triggerButtonText="Đăng nhập"
      saveText="Đăng nhập"
      onAfterOpenChange={() => form.reset()}
      onCancel={() => form.reset()}
      onSave={onSave}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên đăng nhập</FormLabel>
              <FormControl>
                <Input placeholder="Tên đăng nhập" {...field} />
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
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </BaseModal>
  );
}
