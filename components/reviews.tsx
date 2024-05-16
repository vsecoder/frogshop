import StarRating from './stars';
import * as React from "react";
import { SignedIn } from '@clerk/nextjs'


interface ReviewProps {
    author: string;
    rating: number;
    content: string;
}

function Review({ author, rating, content }: ReviewProps) {
    return (
        <article className="flex flex-col px-3.5 py-4 rounded-xl shadow-xl m-auto mb-8 max-w-full w-[300px] max-md:w-full">
            <div className="shrink-0 bg-blue-600 rounded-xl h-[188px]" />
            <h2 className="mt-4 text-lg font-semibold text-black">{author}</h2>
            <div className="flex gap-1.5 pr-20 mt-1.5 max-md:pr-5">
                <StarRating rating={rating} color="white" />
            </div>
            <p className="mt-2.5 text-xs text-stone-500">{content}</p>
        </article>
    );
}


export default function Reviews({ id }: { id: string }) {
    const [reviews, setReviews] = React.useState<ReviewProps[]>([]);
    const [middleRating, setMiddleRating] = React.useState<number>(0);

    React.useEffect(() => {
        fetch("/api/products?id=" + id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                data = data.body.reviews;
                setReviews(data);
                let sum = 0;
                data.forEach((review: ReviewProps) => {
                    sum += review.rating;
                });
                setMiddleRating(sum / data.length);
            });
    }, []);

    return (
        <div className="m-auto p-5">
            <section className="max-w-full w-[1240px] max-md:max-w-full m-auto">
                <header className="flex gap-2.5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <h1 className="text-3xl font-bold text-stone-950">Отзывы</h1>
                    <div className="flex gap-2.5 justify-center my-auto text-xl font-semibold text-neutral-400">
                        <span>Средняя оценка</span>
                        <span>{middleRating}/5</span>
                    </div>
                </header>
                <div className="flex overflow-x-auto gap-5 px-5 mt-5 max-md:flex-wrap">
                    {reviews.map((review, index) => (
                        <Review key={index} author={review.author} rating={review.rating} content={review.content} />
                    ))}
                </div>
                <SignedIn>
                    <button className="justify-center items-center px-16 py-6 mt-5 w-full text-2xl font-semibold text-white bg-blue-600 rounded-xl max-md:px-5 max-md:max-w-full">Оставить отзыв</button>
                </SignedIn>
            </section>
        </div>
    );
}