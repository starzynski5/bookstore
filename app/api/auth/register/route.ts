import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const ip = process.env.BACKEND_URL;

    const body = await request.json();
    console.log("BODY TO BACKEND:", body);

    try {
        const res = await axios.post(`${ip}/api/auth/register`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const token = await res.data;

        const username = jwtDecode(token).sub || "Unknown user";

        // Store the token in a secure cookie
        const cookieStore = cookies();

        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        cookieStore.set({
            name: "username",
            value: username,
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        return Response.json({ token: res.data}, {status: 200});
    }

    catch (err: any) {
        const errorMessage =
            err.response?.data?.message ||
            err.response?.data ||
            "Unknown error";

        console.error("Error during registration:", errorMessage);

        return Response.json({ error: errorMessage }, { status: err.response?.status || 500 });
    }
}