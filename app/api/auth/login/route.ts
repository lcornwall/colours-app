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
        const res = await client.query('SELECT * FROM users WHERE phone_number = $1', [phone_number]);
        const user = res.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            return NextResponse.json({ message: 'Login successful', user });
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    } finally {
        await client.end();
    }
}
