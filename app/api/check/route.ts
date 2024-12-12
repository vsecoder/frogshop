
var prompt = {
    "model": "gpt-4o-mini",
    "request": {
        "messages": [
            {
                'role': 'system',
                'content': `В запросе текст отзыва, если отзыв к продукту содержит оскорбления, ненормативную лексику, нецензурные выражения или является неадекватным, то необходимо вернуть true в JSON формате, такого типа:
{"stop": true}
Иначе вернуть:
{"stop": false}`
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
    const content: string = req.nextUrl.searchParams.get("content");
    prompt.request.messages[1].content = content;
    const url = `http://api.onlysq.ru/ai/v2`;


    var answer = await fetch(url, {
        method: 'POST',
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
