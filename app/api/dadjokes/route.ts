import { NextResponse } from 'next/server';

const API_URL = 'https://api.api-ninjas.com/v1/dadjokes';

export async function GET() {
  const apiKey = process.env.DADJOKES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch jokes' }, { status: response.status });
    }

    const jokes = await response.json();
    return NextResponse.json(jokes);
  } catch (error) {
    console.error('Error fetching jokes:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
