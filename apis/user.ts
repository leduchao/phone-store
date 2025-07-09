const API_URL = "https://localhost:7143/api/users";

async function getUserBasicInfo(): Promise<Response> {
  const res = await fetch(`${API_URL}/get-user-basic-info`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
}

export const UserApis = {
  getUserBasicInfo,
};
