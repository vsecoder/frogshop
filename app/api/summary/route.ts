var prompt = {
    "model": "gpt-4o-mini",
    "request": {
        "messages": [
            {
                'role': 'system',
                'content': `В запросе через "---" отзывы к продукту, тебе нужно выделить явные плюсы и минусы короткими словосочетаниями, не учитывай доставку, скидки, выделяй моменты, которые клиенту могут быть важны, ответ формируй в JSON формате, такого типа:
{
    "nice": ["..."],
    "bad": ["..."]
}`
            },
            {
                'role': 'user',
                'content': ''
            }
        ]
    }
}

export async function GET(
    req: any
) {
    const url = `http://api.onlysq.ru/ai/v2`;
    const content: string = req.nextUrl.searchParams.get("content");

    if (!content) {
        return Response.json({
            status: 400,
            body: {
                error: 'Content is required'
            },
        });
    }

    prompt.request.messages[1].content = content;

    var answer = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(prompt)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });

    return Response.json({
        status: 200,
        body: answer,
    });
}
