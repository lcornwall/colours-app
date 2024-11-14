import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { username, password, dateOfBirth, gender } = await request.json();

        const ip = request.headers.get('x-forwarded-for') ||
            (request as any).socket?.remoteAddress;

        const client = await clientPromise;
        const db = client.db('colourData');
        const existingUser = await db.collection('users').findOne({ username });

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username,
            password: hashedPassword,
            dateOfBirth,
            gender,
            createdAt: new Date(),
            ipAddress: ip
        };

        const result = await db.collection('users').insertOne(newUser);

        return NextResponse.json({ message: 'User created successfully', result }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
