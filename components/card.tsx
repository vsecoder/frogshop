import StarRating from './stars';

interface CardProps {
    text: string;
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ text, image, link }) => {
    return (
        <>
            <div className="max-w-[190px] min-w-[190px] md:max-w-[280px] md:h-auto relative grow items-start mx-auto w-full max-md:px-5">
                <div className="w-full bg-white rounded-[30px]">
                    <img src={image} className="" />
                    <div className="p-8 md:pt-6 pr-0 md:pb-16 md:pl-6">
                        <div className="text-xl font-bold">
                            {text}
                        </div>
                        <p className="mt-1.5 text-xs font-medium">
                            <span className="line-through">70$</span> &gt; 49.9$
                        </p>
                        <StarRating rating={3.5} color='white' />
                    </div>
                </div>
                <div className="m-auto bg-blue-600 text-white flex gap-2.5 justify-center px-6 py-2.5 mt-2.5 text-sm font-medium whitespace-nowrap rounded-full border border-white border-solid max-md:px-5 max-w-[300px]">
                    <div>Перейти</div>
                </div>
            </div>
        </>
    );
};

export default Card;