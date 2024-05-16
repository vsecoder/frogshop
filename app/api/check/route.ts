const headers = {
    //'x-wormgpt-provider': 'deepseek',
    //'x-wormgpt-provider': 'llama',
    'x-wormgpt-provider': 'worm_gpt',
    'Content-Type': 'application/json',
}

var prompt = {
    'messages': [
        {
            'role': 'system',
            'content': `В запросе текст отзыва, если отзыв к продукту содержит оскорбления, ненормативную лексику, нецензурные выражения или является неадекватным, то необходимо вернуть true в JSON формате, такого типа:
{"stop": true}
Иначе вернуть:
{"stop": false}
`,
        },
        {
            'role': 'user',
            'content': ''
        }
    ],
    'max_tokens': 820,
}

export async function GET(
    req: any
) {
    const content: string = req.nextUrl.searchParams.get("content");
    prompt.messages[1].content = content;
    const url = `https://wrmgpt.com/v1/chat/completions`;


    var answer = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(prompt)
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch((error) => {
            return error;
        });

    return Response.json({
        status: 200,
        body: answer,
    });
}
