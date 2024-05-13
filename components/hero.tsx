import StarRating from './stars';

interface MiniCardProps {
    text: string;
    image: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ text, image }) => {
    return (
        <div className="h-[170px] md:h-auto relative flex overflow-hidden grow items-start mx-auto w-full text-white bg-blue-600 rounded-[30px] max-md:px-5">
            <div className="relative z-10 pt-3 md:pt-6 pr-0 md:pb-16 md:pl-6 flex-initial w-[200px]">
                <div className="text-ml md:text-xl font-bold">
                    {text}
                </div>
                <div className="flex gap-2.5 justify-center px-6 py-2.5 mt-2.5 text-sm font-medium whitespace-nowrap rounded-md border border-white border-solid max-md:px-5 max-w-[147px] md:max-w-[150px]">
                    <div>Приобрести ---&gt;</div>
                </div>
            </div>
            <div className="flex-initial text-align-right w-100 mt-10 ml-10 absolute -bottom-12 -right-12 md:bottom-0 md:right-0">
                <img src={image} className="md:w-[200px] md:h-[210px]" />
            </div>
        </div>
    );
};

export default function Hero() {
    return (
        <div className="p-5 pt-0">
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
            <div className="mt-5 w-full max-w-[1240px] max-md:max-w-full m-auto">
                <div className="grid gap-5 grid-cols-2 md:grid-cols-3 max-md:gap-5">
                    <MiniCard text="Клавиатуры и средства ввода" image="/header/2.png" />
                    <MiniCard text="Средства аудио и видео ввода" image="/header/3.png" />
                    <div className="col-span-2 md:col-span-1"><MiniCard text="Прочая переферия" image="/header/4.png" /></div>
                </div>
            </div>
        </div>
    );
};