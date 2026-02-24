import axios from "axios";

export async function GET() {
    const res = await axios.get("http://localhost:5209/api/book", {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.data;

    return Response.json(data);
}