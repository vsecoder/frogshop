import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: 'Информатика',
        href: '/subjects/informatics',
        description:
            'ЕГЭ по информатике или по другому КЕГЭ – это экзамен, который сдают выпускники школы в России. Он проводится в форме тестирования и включает в себя 27 заданий, которые нужно решать за компьютером.',
        icon: ComputerDesktopIcon,
    },
    // More posts...
]

export default function Subjects() {
    return (
        <div className="bg-white py-24 sm:py-32">

            <nav aria-label="Breadcrumb">
                <ol role="list" className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
                    <li>
                        <Link href="/" className="text-sm font-medium text-gray-500">
                            Главная
                        </Link>
                    </li>
                    <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                    >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                    <li>
                        <Link href="#" className="text-sm font-medium text-gray-900">
                            Предметы
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Предметы</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Выберите предмет, по которому хотите подготовиться к ЕГЭ
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <post.icon className="h-12 w-12 text-indigo-600" />
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}