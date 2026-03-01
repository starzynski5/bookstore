import { cookies } from "next/headers";

export async function GET(){
    const cookieStore = cookies();

    cookieStore.delete("token");

    cookieStore.delete("username");

    cookieStore.delete("isLoggedIn");

    return new Response(JSON.stringify({ message: "Logged out successfully" }), {
        status: 200,
    });
}