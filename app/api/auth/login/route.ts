import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers'; // Import the cookies API

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

        // Setting the cookie with HttpOnly and a 1-day expiration
        const cookieStore = cookies();
        cookieStore.set('username', user.username, {
            httpOnly: true, // Prevents client-side access to the cookie
            maxAge: 60 * 60 * 24, // 1 day
            path: '/', // Cookie available site-wide
        });

        // Return a response with a success message
        return NextResponse.json({
            message: 'Login successful',
            user: { username: user.username, dateOfBirth: user.dateOfBirth, gender: user.gender },
        }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
    }
}
