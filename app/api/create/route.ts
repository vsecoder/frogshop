import { sql } from "@vercel/postgres";


export async function GET(
    req: any
) {
    let product_id: string = req.nextUrl.searchParams.get("id");
    let content: string = req.nextUrl.searchParams.get("content");
    let author: string = req.nextUrl.searchParams.get("author");
    let rating: number = req.nextUrl.searchParams.get("rating");

    // insert
    if (content && author && rating) {
        await sql`INSERT INTO reviews (product_id, name, rating, content) VALUES (${product_id}, ${author}, ${rating}, ${content})`;
    }

    return Response.json({
        status: 200,
        body: {
            message: "Review added successfully!"
        },
    });
}