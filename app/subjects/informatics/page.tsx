"use client";
import { PaperClipIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export default function Test() {
    const [question, setQuestion] = useState({
        number: 9,
        theme: '3.4.1 Обработка статистических данных',
        task: `Задание выполняется с использованием прилагаемых файлов.
Откройте файл электронной таблицы, содержащей в каждой строке семь натуральных чисел. Определите количество строк таблицы, для чисел которых выполнены оба условия:

- в строке есть два числа, каждое из которых повторяется дважды, остальные три числа различны;
- среднее арифметическое неповторяющихся чисел строки больше среднего арифметического всех её повторяющихся чисел.

| aaaaaaaaaaaaaa | bbbbbbbbbbbb |
| -------------- | ------------ |
| cccccccccc     | dddddddd     |

\`\`\`
print('Hello, World!')
\`\`\`

**В ответе запишите только число**.`,
        files: [
            {
                name: 'tables.zip',
                size: '2.4mb',
                link: 'https://ege.fipi.ru/docs/B9ACA5BBB2E19E434CD6BEC25284C67F/questions/0B172D0F4D6BABC749E97E54DC40B688/img1_1689855961.zip',
            },
        ],
    });
    const [page, setPage] = useState(9);
    const count = 10;

    return (
        <div className="bg-white container mx-auto max-w-7xl px-6 lg:px-8 py-24 ">
            <nav aria-label="Breadcrumb">
                <ol role="list" className="max-w-7xl flex">
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
                        <Link href="/subjects" className="text-sm font-medium text-gray-500">
                            Предметы
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
                        <a href="/subjects/informatics" className="text-sm font-medium text-gray-900">
                            Информатика
                        </a>
                    </li>
                </ol>
            </nav>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Часть 1</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Реши задание, и перейди к следующему</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">№</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{page}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Тема</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{question.theme}</dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Задание</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div>
                                <Markdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        table: ({ children }) => <table className="table-auto border-collapse border slate-500 mt-5 mb-5">{children}</table>,
                                        th: ({ children }) => <th className="border border-gray-300 p-2 text-gray-700 font-medium">{children}</th>,
                                        td: ({ children }) => <td className="border border-gray-300 p-2 text-gray-700">{children}</td>,
                                        ul: ({ children }) => <ul className="list-disc space-y-2 pl-4 text-sm mt-5 mb-5" role='list'><span>{children}</span></ul>,
                                        li: ({ children }) => <li className="mt-1">{children}</li>,
                                        code: ({ children }) => <code className="bg-gray-100 p-1">{children}</code>,
                                    }}
                                >
                                    {question.task}
                                </Markdown>
                            </div>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Приложенные файлы</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                {question.files.map((file) => (
                                    <li
                                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                                        key={file.name}
                                    >
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">{file.name}</span>
                                                <span className="flex-shrink-0 text-gray-400">{file.size}</span>
                                            </div>
                                        </div>

                                        <div className="ml-4 flex-shrink-0">
                                            <a href="https://ege.fipi.ru/docs/B9ACA5BBB2E19E434CD6BEC25284C67F/questions/0B172D0F4D6BABC749E97E54DC40B688/img1_1689855961.zip" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Скачать
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Ответ</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <textarea
                                rows={3}
                                className="inline-block w-full shadow-sm sm:text-sm py-2 px-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Введите ответ"
                                defaultValue={''}
                            />
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="sm:flex sm:flex-1 sm:items-center w-full sm:justify-between sm:gap-x-8 sm:px-0">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                    </a>
                </div>
                <div className="flex lg:flex">
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Назад</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {Array.from({ length: count }, (_, i) => (
                            i + 1 === page ? (
                                <a
                                    href="#"
                                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setPage(i + 1)}
                                    key={i}
                                >
                                    {i + 1}
                                </a>
                            ) : (
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    onClick={() => setPage(i + 1)}
                                    key={i}
                                >
                                    {i + 1}
                                </a>
                            )
                        ))}
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Вперед</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
