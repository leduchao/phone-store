import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type SignInRequest = z.infer<typeof signInSchema>;
