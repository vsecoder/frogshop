const headers = {
    //'x-wormgpt-provider': 'deepseek',
    //'x-wormgpt-provider': 'llama',
    'x-wormgpt-provider': 'worm_gpt',
    'Content-Type': 'application/json',
}

const prompt = {
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
            'content': `
Компактность, звук от нажатия клавиш, дизайню. Отсутствие подсветки клавиш. В целом, очень стильная удобная клавиатура, к винде подключается моментально, но мне приходилось перенастраивать немало клавиш: чтобы было удобно. Для этого советую 2 проги: Power Toys и Magic Keyboard Utilities (последняя прога платная, подписка стоит около 900-1000 рублей за год, деньги не малые, но думаю оно того стоит)
---
Быстрая доставка, качественный товар, я в восторге)
---
планшета самое то, компактно, стильно. Надо привыкать что точка и запятая на других клавишах, не как на виндоус, язык переключается тоже по другому.
            `
        }
    ],
    'max_tokens': 820,
}

export async function GET(
    req: any
) {

    const url = `https://wrmgpt.com/v1/chat/completions`;

    var answer = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(prompt)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
            return error;
        });

    return Response.json({
        status: 200,
        body: answer,
    });
}
