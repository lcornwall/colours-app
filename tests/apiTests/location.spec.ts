import { test, expect } from '@playwright/test';

const API_ENDPOINT = 'http://localhost:3000/api/location';

test.describe('GET /api/location', () => {
    test('should return a number', async ({ request }) => {
        const response = await request.get(`${API_ENDPOINT}?latitude=40.7128&longitude=-74.0060`);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(typeof responseBody.city).toBe('string');
    });
});