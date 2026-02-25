import axios from "axios";

export async function GET() {
    const ip = process.env.BACKEND_URL;

    const res = await axios.get(`${ip}/api/book`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.data;

    return Response.json(data);
}