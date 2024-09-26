import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const phone_number = searchParams.get('phone_number');

    try {
        if (!id || !phone_number) throw new Error('Pet and owner names required');
        await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets }, { status: 200 });
}