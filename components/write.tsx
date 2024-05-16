import * as React from "react";
import StarRating from "./stars";

interface ColorOptionProps {
    color: string;
    className: string;
    onClick: () => void;
}

const ColorOption: React.FC<ColorOptionProps> = ({ color, className, onClick }) => (
    <button className={`justify-center px-4 py-2.5 rounded-md ${className} max-md:px-5`} onClick={onClick}>{color}</button>
);

export default function Write() {
    const handleColorClick = (color: string) => {
        console.log(`Selected color: ${color}`);
    };

    const handleSubmit = () => {
        console.log("Submitted!");
    };

    const handleCompare = () => {
        console.log("Added to Compare List");
    };

    const handleWishlist = () => {
        console.log("Added to Wishlist");
    };

    const handleRating = (rating: number) => {
        console.log(`Rated: ${rating}`);
    };

    const [rating, setRating] = React.useState<number>(3);

    return (
        <div className="p-5 pt-0">
            <section className="flex flex-col p-8 m-auto mt-2.5 bg-white shadow-2xl rounded-[30px] max-md:px-5 max-w-full w-[1240px] max-md:max-w-full">
                <div className="text-base font-medium text-stone-950 max-md:max-w-full">Как бы вы оценили данный товар?</div>
                <div className="flex gap-1.5 self-start pr-3 mt-1.5">
                    <StarRating rating={3} color="white" clickability={true} state={[rating, setRating]} />
                </div>
                <div className="mt-4 text-base font-medium text-stone-950 max-md:max-w-full">Опишите качество товара:</div>
                <textarea className="shrink-0 mt-1.5 rounded-xl border border-blue-600 border-solid h-[142px] max-md:max-w-full" />
                <div className="flex gap-5 justify-between items-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full mt-5">
                    <form className="flex flex-col text-stone-950">
                        <button type="button" className="justify-center items-center px-6 py-2.5 text-sm font-medium whitespace-nowrap rounded-md border border-solid border-stone-950 max-md:px-5" onClick={handleSubmit}>
                            Отправить
                        </button>
                        <div className="flex gap-2.5 mt-2.5 text-xs">
                            <button type="button" onClick={handleCompare}>Добавить для сравнения</button> •
                            <button type="button" onClick={handleWishlist}>Добавить к списку желаний</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};