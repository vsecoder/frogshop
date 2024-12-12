import { sql } from "@vercel/postgres";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    reviews: {
        "author": string;
        "rating": number;
        "content": string;
    }[];
}

export async function GET(req: any) {
    let product_id: string = req.nextUrl.searchParams.get("id");
    const { rows } = await sql`SELECT * FROM reviews;`;

    const products: Product[] = [
        {
            id: '1',
            name: 'Apple Magic Pro',
            price: 49.9,
            rating: 4,
            description: 'The Apple Magic Pro is the best keyboard for your Mac.',
            image: '/id/1.png',
            reviews: []
        },
        {
            id: '2',
            name: 'Fifine a9v',
            price: 29.9,
            rating: 5,
            description: 'The Fifine a9v is the best microphone for your home studio.',
            image: '/id/2.png',
            reviews: []
        },
        {
            id: '3',
            name: 'JBL Quantum 100',
            price: 49.9,
            rating: 3,
            description: 'The JBL Quantum 100 is the best headset for your gaming setup.',
            image: '/id/3.png',
            reviews: []
        }
    ];

    for (const row of rows) {
        const product = products.find(product => product.id == row.product_id);
        if (product) {
            product.reviews.push({
                author: row.name,
                rating: row.rating,
                content: row.content
            });
        }
    }

    for (const product of products) {
        if (product.reviews.length === 0) {
            product.reviews = [
                {
                    author: "Test User 1",
                    rating: 5,
                    content: "This is an amazing product! Highly recommend."
                },
                {
                    author: "Test User 2",
                    rating: 4,
                    content: "Great product, but it could use some improvements."
                },
                {
                    author: "Test User 3",
                    rating: 3,
                    content: "It's okay, but not exactly what I expected."
                }
            ];
        }
    }

    if (product_id) {
        const product = products.find(product => product.id === product_id);
        if (!product) {
            return Response.json({
                status: 404,
                body: {
                    message: 'Product not found'
                }
            });
        }
        return Response.json({
            status: 200,
            body: product
        });
    }

    return Response.json({
        status: 200,
        body: products
    });
}