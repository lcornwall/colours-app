import { NextResponse } from 'next/server';
import { Client } from 'pg';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const { phone_number, password } = await request.json();

    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
    });

    await client.connect();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const res = await client.query(
            'INSERT INTO users (phone_number, password) VALUES ($1, $2) RETURNING *',
            [phone_number, hashedPassword]
        );

        const user = res.rows[0];
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: 'User already exists or other error' }, { status: 400 });
    } finally {
        await client.end();
    }
}
