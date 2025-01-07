import { OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    const { prompt } = await request.json();
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-4', 
            messages: [
                { role: 'system', content: 'You are a travel assistant. Always suggest specific travel destinations based on user input, including temperature, location type (e.g., beach, city), and other preferences.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 200,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        return json({ error: 'Failed to fetch data from OpenAI' }, { status: 500 });
    }

    const data = await response.json();
    return json({ reply: data.choices[0].message.content });
};
