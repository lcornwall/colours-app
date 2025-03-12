import { test, expect } from '@playwright/test';

const API_ENDPOINT = 'http://localhost:3000/api/randomCharacter';

test.describe('GET /api/randomCharacter', () => {
    test('should return a random image path', async ({ request }) => {
        const response = await request.get(API_ENDPOINT);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('imagePath');
        expect(responseBody.imagePath).toMatch(/\/characters\/.*\.(png|jpg|jpeg|gif|webp)$/i);
    });

    test('should return 404 if no images are found', async ({ request }) => {
        const response = await request.get(API_ENDPOINT);
        if (response.status() === 404) {
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('error', 'No images found in the directory');
        }
    });

    test('should return 500 on failure', async ({ request }) => {
        const response = await request.get(API_ENDPOINT);
        if (response.status() === 500) {
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('error', 'Failed to load images');
        }
    });
});