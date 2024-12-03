import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const dirPath = path.join(process.cwd(), 'public', 'characters');
        const files = await readdir(dirPath);
        const images = files.filter(file => /\.(png|jpg|jpeg|gif|webp)$/i.test(file));

        if (images.length === 0) {
            return NextResponse.json({ error: 'No images found in the directory' }, { status: 404 });
        }

        const randomImage = images[Math.floor(Math.random() * images.length)];
        return NextResponse.json({ imagePath: `/characters/${randomImage}` });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
    }
}

