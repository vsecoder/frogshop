import * as React from "react";

type BadgeProps = {
    text: string;
    bgColor: string;
};

const Badge: React.FC<BadgeProps> = ({ text, bgColor }) => (
    <div className={`justify-center px-1 py-0.5 rounded-sm ${bgColor}`}>
        {text}
    </div>
);

type SectionProps = {
    title: string;
    badges: { text: string; bgColor: string }[];
    textColor: string;
};

const Section: React.FC<SectionProps> = ({ title, badges, textColor }) => (
    <section className="flex flex-col text-xs font-medium">
        <h2 className={`text-sm font-semibold ${textColor}`}>{title}</h2>
        <div className="flex flex-wrap gap-1 mt-1">
            {badges.map((badge, index) => (
                <Badge key={index} text={badge.text} bgColor={badge.bgColor} />
            ))}
        </div>
    </section>
);

const data = {
    goodMatches: [
        { text: "Отличный отклик", bgColor: "bg-emerald-200" },
        { text: "Имба", bgColor: "bg-emerald-200" },
        { text: "Отличный отклик", bgColor: "bg-emerald-200" },
        { text: "топ", bgColor: "bg-emerald-200" },
        { text: "Хорошая цена", bgColor: "bg-emerald-200" },
        { text: "Достойное качетво", bgColor: "bg-emerald-200" },
    ],
    badMatches: [
        { text: "Сломались", bgColor: "bg-red-100" },
        { text: "Плохое качество", bgColor: "bg-red-100" },
        { text: "Сломались", bgColor: "bg-red-100" },
        { text: "Сломались", bgColor: "bg-red-100" },
        { text: "Плохое качество", bgColor: "bg-red-100" },
        { text: "Плохое качество", bgColor: "bg-red-100" },
    ],
    otherMatches: [
        { text: "Тыры пыры", bgColor: "bg-neutral-400" },
        { text: "Чух Чух Чух", bgColor: "bg-neutral-400" },
        { text: "кваква", bgColor: "bg-neutral-400" },
    ],
};

export default function Summary() {
    return (
        <div className="p-5 pt-0">
            <section className="flex flex-col p-8 m-auto mt-2.5 bg-white shadow-2xl rounded-[30px] max-md:px-5 max-w-full w-[1240px] max-md:max-w-full">
                <header className="flex gap-5 justify-between pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 items-center font-semibold">
                        <img
                            loading="lazy"
                            src="/logo.svg"
                            alt="FrogFeed Logo"
                            className="shrink-0 selfretch w-11 aspect-[1.1]"
                        />
                        <div className="self-stretch my-auto text-2xl text-black">FrogFeed</div>
                        <div className="self-stretch my-auto text-base text-neutral-400">Краткая сводка</div>
                    </div>
                    <button
                        className="justify-center px-6 py-2.5 my-auto text-sm font-medium whitespace-nowrap rounded-md border border-solid border-stone-950 text-stone-950 max-md:px-5"
                        type="button"
                    >
                        Сгенерировано AI
                    </button>
                </header>
                <div className="flex gap-2.5 self-start pr-11 mt-2.5 max-md:flex-wrap max-md:pr-5">
                    <Section
                        title="Хорошие совпадения:"
                        badges={data.goodMatches}
                        textColor="text-stone-950"
                    />
                    <div className="shrink-0 w-px bg-zinc-100 h-[97px] rounded-[100px] block max-md:hidden" />
                    <Section
                        title="Плохие совпадения:"
                        badges={data.badMatches}
                        textColor="text-stone-950"
                    />
                    <div className="shrink-0 w-px bg-zinc-100 h-[97px] rounded-[100px] block max-md:hidden" />
                    <section className="flex flex-col self-start">
                        <h2 className="text-sm font-semibold text-stone-950">Прочие совпадения:</h2>
                        <div className="flex flex-wrap gap-0.5 content-start mt-1 text-xs font-medium text-white">
                            {data.otherMatches.map((badge, index) => (
                                <Badge key={index} text={badge.text} bgColor={badge.bgColor} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};