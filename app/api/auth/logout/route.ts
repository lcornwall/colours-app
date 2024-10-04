import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.headers.append('Set-Cookie', 'username=; Max-Age=0; Path=/; HttpOnly;');
    return response;
}
