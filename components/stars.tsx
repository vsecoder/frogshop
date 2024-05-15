interface StarRatingProps {
    rating: number;
    color?: string;
}

export default function StarRating({ rating, color = 'black' }: StarRatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-1.5 my-auto">
            {[...Array(fullStars)].map((_, index) => (
                <img
                    key={`full-star-${index}`}
                    src={color === 'white' ? "/icons/white-star-full.svg" : "/icons/star-full.svg"}
                    alt="Full star"
                    className="shrink-0 w-3.5 aspect-[1.08] fill-white border-none"
                />
            ))}
            {hasHalfStar && (
                <img
                    src={color === 'white' ? "/icons/white-star-full.svg" : "/icons/star-full.svg"}
                    alt="Half star"
                    className="shrink-0 w-3.5 border border-white aspect-[1.08] fill-blue-600 stroke-[1px] stroke-white border-none"
                />
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <img
                    key={`empty-star-${index}`}
                    src={color === 'white' ? "/icons/white-star-empty.svg" : "/icons/star-empty.svg"}
                    alt="Empty star"
                    className="shrink-0 border border-white aspect-square fill-blue-600 stroke-[1px] stroke-white w-[13px] border-none"
                />
            ))}
        </div>
    );
};