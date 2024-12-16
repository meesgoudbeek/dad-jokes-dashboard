// app/api/dadjokes/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'w5dlActl9mbT1wxJOyjBuw==9ptWMjRhip5hyO4W',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch jokes' }, { status: 500 });
    }

    const jokes = await res.json();
    return NextResponse.json(jokes);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jokes' }, { status: 500 });
  }
}
