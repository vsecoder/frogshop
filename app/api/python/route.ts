import axios from "axios";

const url = "https://emkc.org/api/v2/piston/execute";


export async function GET(
    req: any
) {
    let code: string = req.nextUrl.searchParams.get("code");

    let data = {
        language: "python3",
        version: "3.10.0",
        files: [
            {
                name: "main.py",
                content: code,
            },
        ],
    };

    console.log(code);

    let response = await axios.post(url, data);

    return Response.json(response.data);
}