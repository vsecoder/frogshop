"use client";

import Card from './card';
import React from 'react';


interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
}


export default function Products() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.body);
            });
    }, []);

    return (
        <div className="grid gap-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-md:gap-5 max-w-[1240px] m-auto pl-5 pr-5 md:p-0">
            {products.map((product) => (
                <Card
                    key={product.id}
                    id={product.id}
                    text={product.name}
                    image={`/products/${product.id}.png`}
                    rating={product.rating}
                    price={product.price}
                />
            ))}
        </div>
    );
}
