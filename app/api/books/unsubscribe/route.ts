import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const ip = process.env.BACKEND_URL;

    const body = await request.json();

    const cookieStore = cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const res = await axios.post(`${ip}/api/User/unsubscribe/${body.bookId}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });

        console.log(res);

        return Response.json({ message: "Unsubscribed successfully" }, { status: 200 });
    } catch (err: any) {
        const errorMessage =
            err.response?.data?.message ||
            err.response?.data ||
            "Unknown error";
        console.error("Error during subscription:", errorMessage);
        return Response.json({ error: errorMessage }, { status: err.response?.status || 500 });
    }
}