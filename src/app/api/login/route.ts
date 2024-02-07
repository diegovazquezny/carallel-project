import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export function GET(request: NextRequest) {
  const basicAuthHeader = request.headers.get("Authorization");
  if (basicAuthHeader) {
    const [, encoded] = basicAuthHeader.split(" ");
    const decoded = atob(encoded);
    const [email, password] = decoded.split(":");
    console.log(`check ${email} and ${password} in DB `);
    const uuid = crypto.randomUUID();
    cookies().set("auth_token", uuid);
    cookies().set("user_id", "111");
    return new Response(
      JSON.stringify({
        auth_token: uuid,
        user_id: "111",
      }),
      {
        status: 200,
      },
    );
  } else {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
}
