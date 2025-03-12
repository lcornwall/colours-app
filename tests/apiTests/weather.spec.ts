import { test, expect } from '@playwright/test';

test.describe('Weather API', () => {
    const baseUrl = 'http://localhost:3000/api/weather';

    test('should return weather data for valid latitude and longitude', async ({ request }) => {
        const response = await request.get(`${baseUrl}?latitude=51.5074&longitude=-0.1278`);
        expect(response.status()).toBe(200);
        const data = await response.json();

        expect(data).toHaveProperty('current_hour');
        expect(data).toHaveProperty('current_temperature');
        expect(typeof data.current_hour).toBe('number');
        expect(typeof data.current_temperature).toBe('number');
    });

    test('should return 400 for missing latitude or longitude', async ({ request }) => {
        const response = await request.get(`${baseUrl}?latitude=51.5074`);
        expect(response.status()).toBe(400);
        const data = await response.json();

        expect(data).toHaveProperty('error');
        expect(data.error).toBe('Missing latitude or longitude');
    });

    test('should return 500 for invalid latitude and longitude', async ({ request }) => {
        const response = await request.get(`${baseUrl}?latitude=999&longitude=999`);
        expect(response.status()).toBe(500);
        const data = await response.json();

        expect(data).toHaveProperty('error');
        expect(data.error).toBe('Failed to fetch weather data');
    });
});

