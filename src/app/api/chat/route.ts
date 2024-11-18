import { NextResponse } from 'next/server';

const apiKeyEnv = process.env.XAI_API_KEY;

export async function POST(req: Request) {
  try {
    const { messages, apiKey } = await req.json();
    console.log('Received messages:', messages);
    console.log('Received API Key:', apiKey ? 'User provided' : 'Using default');

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const effectiveApiKey = apiKey?.trim() || apiKeyEnv;

    if (!effectiveApiKey) {
      return NextResponse.json(
        { error: 'API key is missing' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${effectiveApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: messages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    // Updated error handling
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API Error:', errorData || response.statusText);
      return NextResponse.json(
        { error: errorData?.error || 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('AI Response:', data);

    if (!data.choices?.[0]?.message) {
      return NextResponse.json(
        { error: 'Invalid response format from AI' },
        { status: 500 }
      );
    }

    const aiMessage = data.choices[0].message;
    return NextResponse.json({
      id: data.id || Date.now().toString(),
      role: 'assistant', // Ensure role is 'assistant' as per Message type
      content: aiMessage.content,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: (error as any)?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}