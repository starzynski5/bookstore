import axios from "axios";

export async function GET(request: Request) {
    const ip = process.env.BACKEND_URL;

    const { searchParams } = new URL(request.url);
    const titleSlug = searchParams.get("titleSlug");

    const res = await axios.get(`${ip}/api/book/url/${titleSlug}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.data;

    return Response.json(data);
}