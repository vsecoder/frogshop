import StarRating from './stars';
import * as React from "react";


interface ReviewProps {
    author: string;
    rating: number;
    content: string;
}

function Review({ author, rating, content }: ReviewProps) {
    return (
        <div className='scroll-snap-align-start'>
            <article className="flex flex-col px-3.5 py-4 rounded-xl shadow-xl m-auto mb-8 max-w-full w-[300px] h-[350px] bg-white">
                <div className="shrink-0 bg-blue-600 rounded-xl h-[188px]" />
                <h2 className="mt-4 text-lg font-semibold text-black">{author}</h2>
                <div className="flex gap-1.5 pr-20 mt-1.5 max-md:pr-5">
                    <StarRating rating={rating} color="white" />
                </div>
                <p className="mt-2.5 text-xs text-stone-500">{content}</p>
            </article>
        </div>
    );
}


export default function Reviews({ id }: { id: string }) {
    const [reviews, setReviews] = React.useState<ReviewProps[]>([]);
    const [middleRating, setMiddleRating] = React.useState<number>(0);

    React.useEffect(() => {
        fetch(`/api/products?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                const reviews = data.body.reviews;
                const middleRating = reviews.reduce((acc: number, review: ReviewProps) => acc + review.rating, 0) / reviews.length;
                setReviews(reviews);
                setMiddleRating(middleRating);
            });
    }, [id]);


    return (
        <div className="m-auto p-5">
            <section className="max-w-full w-[1240px] max-md:max-w-full m-auto">
                <header className="flex gap-2.5 justify-between pr-3 pl-3 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <h1 className="text-3xl font-bold text-stone-950">Отзывы</h1>
                    <div className="flex gap-2.5 justify-center my-auto text-xl font-semibold text-neutral-400">
                        <span>Средняя оценка</span>
                        <span>{middleRating.toFixed(1)}/5</span>
                    </div>
                </header>
                <div className="flex overflow-x-auto gap-5 px-5 mt-5 snap-x">
                    {reviews.map((review) => (
                        <Review key={review.author} {...review} />
                    ))}
                </div>
            </section>
        </div>
    );
}