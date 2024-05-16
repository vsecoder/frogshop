import React from 'react';

interface StarRatingProps {
    rating: number;
    color?: string;
    clickability?: boolean;
    state?: [number, React.Dispatch<React.SetStateAction<number>>];
}

export default function StarRating({ rating, color = 'black', clickability = false, state }: StarRatingProps) {
    const [ratingState, setRatingState] = React.useState(rating);
    const [fullStars, setFullStars] = React.useState(Math.floor(ratingState));
    const [hasHalfStar, setHasHalfStar] = React.useState(ratingState % 1 !== 0);

    function setRating(rating: number) {
        if (!clickability) return;
        setRatingState(rating);
        setFullStars(Math.floor(rating));
        setHasHalfStar(rating % 1 !== 0);
        if (state) state[1](rating);
    }

    return (
        <div className="flex gap-1.5 my-auto">
            {[...Array(fullStars)].map((_, index) => (
                <img
                    key={`full-star-${index}`}
                    src={color === 'white' ? "/icons/white-star-full.svg" : "/icons/star-full.svg"}
                    alt="Full star"
                    className="shrink-0 w-3.5 aspect-[1.08] fill-white border-none"
                    onClick={() => setRating(index + 1)}
                />
            ))}
            {hasHalfStar && (
                <img
                    src={color === 'white' ? "/icons/white-star-full.svg" : "/icons/star-full.svg"}
                    alt="Half star"
                    className="shrink-0 w-3.5 border border-white aspect-[1.08] fill-blue-600 stroke-[1px] stroke-white border-none"
                    onClick={() => setRating(fullStars + 0.5)}
                />
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <img
                    key={`empty-star-${index}`}
                    src={color === 'white' ? "/icons/white-star-empty.svg" : "/icons/star-empty.svg"}
                    alt="Empty star"
                    className="shrink-0 border border-white aspect-square fill-blue-600 stroke-[1px] stroke-white w-[13px] border-none"
                    onClick={() => setRating(fullStars + (hasHalfStar ? 1 : 0) + index + 1)}
                />
            ))}
        </div>
    );
};