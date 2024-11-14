import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');

    if (!latitude || !longitude) {
        return NextResponse.json({ error: 'Missing latitude or longitude' }, { status: 400 });
    }

    try {
        const currentHour = new Date().getHours();

        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude,
                longitude,
                hourly: 'temperature_2m',
                timezone: 'auto',
            },
        });

        const currentTemperature = response.data.hourly.temperature_2m[currentHour];

        return NextResponse.json({
            current_hour: currentHour,
            current_temperature: currentTemperature,
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
    }
}
