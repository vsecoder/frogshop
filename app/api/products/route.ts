
interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    reviews?: {
        "author": string;
        "rating": number;
        "content": string;
    }[];
}

export async function GET(
    req: any
) {
    let product_id: string = req.nextUrl.searchParams.get("id");
    const products: Product[] = [
        {
            id: '1',
            name: 'Apple Magic Pro',
            price: 49.9,
            rating: 4,
            description: 'The Apple Magic Pro is the best keyboard for your Mac.',
            image: '/id/1.png',
            reviews: [
                {
                    "author": "John Doe",
                    "rating": 5,
                    "content": "I love this keyboard! Very comfortable to type on."
                }
            ]
        },
        {
            id: '2',
            name: 'Fifine a9v',
            price: 29.9,
            rating: 5,
            description: 'The Fifine a9v is the best microphone for your home studio.',
            image: '/id/2.png',
            reviews: [
                {
                    "author": "Jane Doe",
                    "rating": 5,
                    "content": "I love this microphone! Very clear sound."
                }
            ]
        },
        {
            id: '3',
            name: 'JBL Quantum 100',
            price: 49.9,
            rating: 3,
            description: 'The JBL Quantum 100 is the best headset for your gaming setup.',
            image: '/id/3.png',
            reviews: [
                {
                    "author": "John Doe",
                    "rating": 4,
                    "content": "I love this headset! Very comfortable to wear."
                }
            ]
        }
    ];

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