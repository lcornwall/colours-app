import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    try {
        const cookieStore = cookies();
        const username = cookieStore.get('username')?.value;

        if (!username) {
            return NextResponse.json({ error: 'Unauthorized: No username found' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db('colourData');
        const user = await db.collection('users').findOne({ username });

        if (!user || !user.dateOfBirth) {
            return NextResponse.json({ error: 'User not found or date of birth not available' }, { status: 404 });
        }

        const dateOfBirth = new Date(user.dateOfBirth);
        const age = calculateAge(dateOfBirth);

        let message: string;

        switch (true) {
            case (age == 3):
                message = 'Try age 3-4 games!';
                break;
            case (age == 4):
                message = 'Try age 3-4 or 4-5 games!';
                break;
            case (age == 5):
                message = `Try age 4-5 or 5-6 games!`;
                break;
            case (age == 6):
                message = `Try age 5-6 or 6-7 games!`;
                break;
            case (age == 7):
                message = `Try age 6-7 or 7-8 games!`;
                break;
            case (age == 8):
                message = `Try age 7-8 games!`;
                break;
            default:
                message = 'There are no games for your age yet!';
                break;
        }

        return NextResponse.json({ message }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to retrieve age' }, { status: 500 });
    }
}

function calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    return age;
}
