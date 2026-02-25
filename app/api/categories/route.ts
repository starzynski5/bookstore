import axios from "axios";

export async function GET() {
    const ip = process.env.BACKEND_URL;

    const res = await axios.get(`${ip}/api/category`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.data;

    console.log(data);

    return Response.json(data);
}