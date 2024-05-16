"use client";

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
    let swears = /(?<![а-яё])(?:(?:(?:у|[нз]а|(?:хитро|не)?вз?[ыьъ]|с[ьъ]|(?:и|ра)[зс]ъ?|(?:о[тб]|п[оа]д)[ьъ]?|(?:\S(?=[а-яё]))+?[оаеи-])-?)?(?:[её](?:б(?!о[рй]|рач)|п[уа](?:ц|тс))|и[пб][ае][тцд][ьъ]).*?|(?:(?:н[иеа]|ра[зс]|[зд]?[ао](?:т|дн[оа])?|с(?:м[еи])?|а[пб]ч)-?)?ху(?:[яйиеёю]|л+и(?!ган)).*?|бл(?:[эя]|еа?)(?:[дт][ьъ]?)?|\S*?(?:п(?:[иеё]зд|ид[аое]?р|ед(?:р(?!о)|[аое]р|ик)|охую)|бля(?:[дбц]|тс)|[ое]ху[яйиеё]|хуйн).*?|(?:о[тб]?|про|на|вы)?м(?:анд(?:[ауеыи](?:л(?:и[сзщ])?[ауеиы])?|ой|[ао]в.*?|юк(?:ов|[ауи])?|е[нт]ь|ища)|уд(?:[яаиое].+?|е?н(?:[ьюия]|ей))|[ао]л[ао]ф[ьъ](?:[яиюе]|[еёо]й))|елд[ауые].*?|ля[тд]ь|(?:[нз]а|по)х)(?![а-яё])/g;
    const [swearsDetected, setSwearsDetected] = React.useState<boolean>(false);

    const handleColorClick = (color: string) => {
        console.log(`Selected color: ${color}`);
    };

    async function check() {
        const content = document.querySelector("textarea")?.value;
        const response = await fetch(`/api/check?content=${content}`);
        let data = await response.json();
        console.log(data);
        data = data.body.choices[0].message.content;
        data = JSON.parse(data);

        if (data.stop) {
            console.log("AI Swear detected!");
            setSwearsDetected(true);
        } else {
            console.log("AI No swears detected!");
            setSwearsDetected(false);

            alert("Отзыв успешно отправлен!");
        }
    }

    const handleSubmit = () => {
        if (!document.querySelector("textarea")?.value) {
            return;
        }
        if (swearsDetected) {
            return;
        }
        check();
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
                <textarea
                    className="shrink-0 mt-1.5 rounded-xl border border-solid h-[142px] max-md:max-w-full p-2 border-stone-950"
                    placeholder="Напишите ваш отзыв здесь..."
                    onChange={(e) => {
                        if (swears.test(e.target.value)) {
                            console.log("Swear detected!");
                            setSwearsDetected(true);
                        } else {
                            setSwearsDetected(false);
                        }
                    }}
                />
                <div className="flex gap-5 justify-between items-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full mt-5">
                    <form className="flex flex-col text-stone-950">
                        {swearsDetected && <div className="text-xs text-red-600">Обнаружены ненормативные слова!</div>}
                        <button
                            type="button"
                            className="justify-center items-center px-6 py-2.5 text-sm font-medium whitespace-nowrap rounded-md border border-solid border-stone-950 max-md:px-5"
                            onClick={handleSubmit}
                            {...(swearsDetected && {
                                disabled: true,
                                className: "justify-center items-center px-6 py-2.5 text-sm font-medium whitespace-nowrap rounded-md border border-solid border-stone-950 max-md:px-5 bg-stone-40 text-red-600"
                            })}
                        >
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