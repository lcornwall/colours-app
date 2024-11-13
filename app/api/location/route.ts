import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');

    if (!latitude || !longitude) {
        console.log('Latitude or Longitude missing in request:', searchParams);  // Debugging log
        return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
    }

    try {
        const apiKey = process.env.NEXT_PUBLIC_LOCATION_API;  // Log the API key value (carefully!)
        console.log('Using API Key:', apiKey);  // Debugging log, make sure API key is being read
        const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${apiKey}`
        );
        const city = response.data.results[0]?.components?.city || 'Unknown location';
        console.log('Location data:', city);  // Debugging log
        return NextResponse.json({ city });
    } catch (error) {
        console.error('Error fetching location data:', error);  // Log the error
        return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
    }
}
