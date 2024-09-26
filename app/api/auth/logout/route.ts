import { NextResponse } from 'next/server';

export async function POST() {
    return NextResponse.json({ message: 'Logout successful' }, {
        headers: { 'Set-Cookie': 'session=; HttpOnly; Path=/; Max-Age=0;' },
    });
}

