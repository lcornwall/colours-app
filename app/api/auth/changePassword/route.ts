import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { currentPassword, newPassword } = await request.json();

        const cookieStore = cookies();
        const username = cookieStore.get('username');

        if (!username) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('colourData');

        const user = await db.collection('users').findOne({ username: username.value });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await db.collection('users').updateOne(
            { username: username.value },
            { $set: { password: hashedNewPassword } }
        );

        return NextResponse.json({ message: 'Password changed successfully' }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to change password' }, { status: 500 });
    }
}
