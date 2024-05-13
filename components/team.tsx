const people = [
    {
        name: 'Остащенко Всеволод',
        role: 'Full-stack разработчик',
        imageUrl:
            'https://avatars.githubusercontent.com/u/60792943?v=4',
    },
    {
        name: 'Труфанова Анастасия',
        role: 'Manager, QA',
        imageUrl:
            'https://github.com/vsecoder/enestasy/blob/main/public/avatar.png?raw=true',
    },
    {
        name: 'Unkn0wn',
        role: 'QA, Cybersecurity',
        imageUrl:
            'https://avatars.githubusercontent.com/u/101826984?v=4',
    },
]

export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">В разработке участвуют</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Наши сотрудники работают над тем, чтобы сделать подготовку к ЕГЭ максимально удобной и
                        эффективной.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}