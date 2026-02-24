import axios from "axios";

export async function GET() {
    const res = await axios.get("http://localhost:5209/api/category", {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.data;

    console.log(data);

    return Response.json(data);
}