import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        const client = await clientPromise;
        const db = client.db('colourData');

        const user = await db.collection('users').findOne({ username });

        if (!user) {
            return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
        }
        const cookieStore = cookies();
        cookieStore.set('username', user.username, {
            maxAge: 60 * 60 * 24,
            path: '/',
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({
            message: 'Login successful',
            user: { username: user.username, dateOfBirth: user.dateOfBirth, gender: user.gender },
        }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
    }
}
