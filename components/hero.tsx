interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-1.5 my-auto">
            {[...Array(fullStars)].map((_, index) => (
                <img
                    key={`full-star-${index}`}
                    src="/icons/star-full.svg"
                    alt="Full star"
                    className="shrink-0 w-3.5 aspect-[1.08] fill-white border-none"
                />
            ))}
            {hasHalfStar && (
                <img
                    src="/icons/star-half.svg"
                    alt="Half star"
                    className="shrink-0 w-3.5 border border-white aspect-[1.08] fill-blue-600 stroke-[1px] stroke-white border-none"
                />
            )}
            {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <img
                    key={`empty-star-${index}`}
                    src="/icons/star-empty.svg"
                    alt="Empty star"
                    className="shrink-0 border border-white aspect-square fill-blue-600 stroke-[1px] stroke-white w-[13px] border-none"
                />
            ))}
        </div>
    );
};

export default function Hero() {
    return (
        <section className="pr-20 pb-1.5 pl-10 mt-10 max-w-full bg-blue-600 rounded-[30px] w-[1240px] max-md:px-5 m-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10 p-5">
                        <header className="flex gap-5 self-start text-base font-semibold text-white whitespace-nowrap">
                            <img
                                src="logo-invert.svg"
                                alt="FrogShop logo"
                                className="shrink-0 aspect-[1.1] w-[33px] color-white"
                            />
                            <h1 className="my-auto">FrogShop</h1>
                        </header>
                        <p className="mt-2.5 text-4xl font-bold text-white">
                            Клавиатуры высшего Ква-чества!
                        </p>
                        <div className="flex gap-1.5 mt-2.5">
                            <h2 className="text-base font-medium text-white">
                                Apple Magic Pro
                            </h2>
                            <StarRating rating={3.5} />
                        </div>
                        <p className="mt-1.5 text-xs font-medium text-white">
                            <span className="line-through">70$</span> &gt; 49.9$
                        </p>
                        <button className="flex gap-2.5 justify-center px-6 py-2.5 mt-2.5 text-sm font-medium text-white whitespace-nowrap rounded-md border border-white border-solid max-md:px-5 max-w-[200px]">
                            <span>Приобрести ---&gt;</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img
                        src="/header/1.png"
                        alt="Apple Magic Pro keyboard"
                        className="grow w-full aspect-[1.82] max-md:mt-10 max-md:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};