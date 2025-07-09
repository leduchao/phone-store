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
import { useAuth } from "@/context/auth.context";
import { AuthApis } from "@/apis/auth";

export default function SignInModal({
  isOpen,
  onOpenChange,
  onSuccess,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}) {
  const form = useForm<SignInRequest>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signIn } = useAuth();

  const onSave = async () => {
    const isValid = await form.trigger();
    if (!isValid) return false;

    const data = form.getValues();
    console.log("Validated data:", data);

    const resp = await AuthApis.signIn(data);
    if (resp.ok) {
      const user = await resp.json();
      signIn({
        isAdmin: user.data.isAdmin,
        firstName: user.data.firstName,
        profilePicture: user.data.profilePicture,
      });
      onSuccess?.();
      onOpenChange?.(false);
      form.reset();
      return true;
    }

    console.error("Sign-in failed");
    form.reset();
    return false;
  };

  return (
    <BaseModal
      title="Đăng nhập"
      type="form"
      triggerButtonText="Đăng nhập"
      saveText="Đăng nhập"
      open={isOpen}
      onOpenChange={onOpenChange}
      onAfterOpenChange={() => form.reset()}
      onCancel={() => form.reset()}
      onSave={onSave}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
