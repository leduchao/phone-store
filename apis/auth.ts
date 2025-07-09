import { SignInRequest } from "@/schemas/sign-in.schema";

const API_URL = "https://localhost:7143/api/auth";

async function signIn(request: SignInRequest): Promise<Response> {
  const res = await fetch(`${API_URL}/sign-in`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return res;
}

const signOut = async () => {
  const resp = await fetch(`${API_URL}/sign-out`, {
    method: "POST",
    credentials: "include",
  });

  return resp;
};

export const AuthApis = {
  signIn,
  signOut,
};
