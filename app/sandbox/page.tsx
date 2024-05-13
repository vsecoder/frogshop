"use client";
import Editor from '@monaco-editor/react';
import Link from 'next/link';
import { useRef } from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';


export default function Sandbox() {
    const editorRef = useRef(null);
    const code = `def f(n):
    if n == 0:
        return 0
    elif n > 0 and n % 2 == 0:
        return f(n / 2)
    else:
        return 1 + f(n - 1)

i = 0
while True:
    if f(i) == 11:
        print(i)
        break
    i += 1
`;

    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
    }

    const runCode = () => {
        if (editorRef.current !== null && editorRef.current !== undefined) {
            let pythonCode = (editorRef.current as any).getValue();
            // \n -> \\n
            //pythonCode = pythonCode.replace(/\n/g, '\\n');

            fetch(`/api/python?code=${pythonCode}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    alert(data.run.output);
                });
        }
    }

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
                            Песочница
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Песочница</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Тут можно будет попробовать решить задачу и посмотреть, как это выглядит
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none p-6">
                    <a
                        className="text-sm font-semibold text-gray-900 bg-gray-100 rounded-md p-2.5 h-10 flex items-center gap-x-2 cursor-pointer"
                        onClick={() => runCode()}
                    >
                        <ChevronDoubleRightIcon className="h-6 w-6" />
                        Run
                    </a>
                    <Editor
                        height="50vh"
                        defaultLanguage="python"
                        defaultValue={code}
                        onMount={handleEditorDidMount}
                    />
                </div>
            </div>
        </div >
    )
}