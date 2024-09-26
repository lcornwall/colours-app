import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const cookies = request.headers.get('cookie');
    const session = cookies?.split('session=')[1];

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const userId = session;

        if (userId) {
            return NextResponse.json({ message: 'Authenticated', userId });
        } else {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    } catch {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}
