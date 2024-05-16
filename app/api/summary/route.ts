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
            'content': `В запросе через "---" отзывы к продукту, тебе нужно выделить явные плюсы и минусы короткими словосочетаниями, не учитывай доставку, скидки, выделяй моменты, которые клиенту могут быть важны, ответ формируй в JSON формате, такого типа:
{
    "nice": "...",
    "bad": "..."
}`,
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
    const url = `https://wrmgpt.com/v1/chat/completions`;
    const content: string = req.nextUrl.searchParams.get("content");

    if (!content) {
        return Response.json({
            status: 400,
            body: {
                error: 'Content is required'
            },
        });
    }

    prompt.messages[1].content = content;

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
