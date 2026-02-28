import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
    const ip = process.env.BACKEND_URL;

    const cookieStore = cookies();
    
    const token = cookieStore.get("token")?.value;

    const res = await axios.get(`${ip}/api/User/subscriptions`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    })
    
    return new Response(JSON.stringify(res.data), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    })
}