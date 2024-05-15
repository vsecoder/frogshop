"use client";

interface NavItemProps {
    label: string;
}

function NavItem({ label }: NavItemProps) {
    return <div className="text-base text-neutral-400 cursor-pointer">{label}</div>;
};

const navItems = ["Клавы", "Мышки", "Камеры", "Прочее"];

export default function Header() {
    return (
        <>
            <header className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1240px] max-md:flex-wrap max-md:max-w-full m-auto p-5 pb-0">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div
                        className="flex gap-5 text-xl md:text-2xl font-semibold text-black cursor-pointer"
                        onClick={() => window.location.href = '/'}
                    >
                        <img
                            loading="lazy"
                            src="/logo.svg"
                            alt="FrogShop logo"
                            className="shrink-0 aspect-[1.1] w-[55px]"
                        />
                        <div className="my-auto">FrogShop</div>
                    </div>
                    <nav className="gap-5 justify-between my-auto hidden md:flex">
                        {navItems.map((item, index) => (
                            <NavItem key={index} label={item} />
                        ))}
                    </nav>
                </div>
                <div className="flex gap-5 justify-center my-auto text-base font-semibold max-md:flex-wrap">
                    <div className="hidden md:flex gap-2.5 justify-center px-20 py-2.5 my-auto rounded-3xl border border-solid cursor-pointer border-neutral-900 text-neutral-900 max-md:px-5">
                        <img
                            loading="lazy"
                            src="/icons/find.svg"
                            alt="Search icon"
                            className="shrink-0 self-start aspect-square w-[18px] m-0.5"
                        />
                        <div>Поиск</div>
                    </div>
                    <div className="flex gap-2.5 justify-center px-6 py-2.5 text-white rounded-md bg-neutral-900 max-md:px-5 cursor-pointer">
                        <img
                            loading="lazy"
                            src="/icons/user.svg"
                            alt="Login icon"
                            className="shrink-0 w-6 aspect-square"
                        />
                        <div className="my-auto">Войти</div>
                    </div>
                </div>
            </header>
            <div className="p-5 pt-2 pb-0">
                <div className="flex cursor-pointer md:hidden gap-2.5 justify-center px-20 py-2.5 my-auto rounded-3xl border border-solid border-neutral-900 text-neutral-900 pr-20 pb-1.5 pl-10 mt-0 max-w-full w-[1240px] max-md:px-5 m-auto">
                    <img
                        loading="lazy"
                        src="/icons/find.svg"
                        alt="Search icon"
                        className="shrink-0 self-start aspect-square w-[18px] m-0.5"
                    />
                    <div>Поиск</div>
                </div>
            </div>
        </>
    );
};