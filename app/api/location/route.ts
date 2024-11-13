// app/api/location/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');

    if (!latitude || !longitude) {
        return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
    }

    try {
        const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${process.env.NEXT_PUBLIC_LOCATION_API}`
        );
        const city = response.data.results[0]?.components?.city || 'Unknown location';
        return NextResponse.json({ city });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
    }
}
