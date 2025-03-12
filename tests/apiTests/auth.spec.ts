import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000/api/auth';
let authCookie: string | undefined;

test.describe('Authentication API', () => {
    const uniqueUsername = `testuser_${Date.now()}`;

    test('should register a new user successfully', async ({ request }) => {
        const response = await request.post(`${baseUrl}/signup`, {
            data: {
                username: uniqueUsername,
                password: 'Test@1234',
                dateOfBirth: '2018-06-15',
                gender: 'male'
            }
        });

        expect(response.status()).toBe(201);
        const data = await response.json();
        expect(data).toHaveProperty('message', 'User created successfully');
    });

    test('should not allow duplicate user registration', async ({ request }) => {
        const response = await request.post(`${baseUrl}/signup`, {
            data: {
                username: uniqueUsername,
                password: 'Test@1234',
                dateOfBirth: '2018-06-15',
                gender: 'male'
            }
        });

        expect(response.status()).toBe(409);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'User already exists');
    });

    test('should login successfully and return a cookie', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                username: uniqueUsername,
                password: 'Test@1234'
            }
        });

        const responseData = await response.json();
        console.log('Login response:', responseData);

        expect(response.status()).toBe(200);
        expect(responseData).toHaveProperty('message', 'Login successful');
        expect(responseData).toHaveProperty('user');
        expect(responseData.user.username).toBe(uniqueUsername);

        const cookieHeader = response.headers()['set-cookie'];
        authCookie = cookieHeader?.match(/username=([^;]+)/)?.[1];

        expect(authCookie).toBeDefined();
        console.log('Saved authCookie:', authCookie);
    });

    test('should not login with invalid credentials', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                username: uniqueUsername,
                password: 'WrongPassword'
            }
        });

        expect(response.status()).toBe(401);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Invalid username or password');
    });

    test('should allow changing password when authenticated', async ({ request }) => {
        if (!authCookie) {
            test.fail(true, 'No authentication cookie found');
        }

        const response = await request.post(`${baseUrl}/changePassword`, {
            data: {
                currentPassword: 'Test@1234',
                newPassword: 'NewPassword@123'
            },
            headers: {
                Cookie: `username=${authCookie}`
            }
        });

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty('message', 'Password changed successfully');
    });

    test('should not change password if old password is incorrect', async ({ request }) => {
        if (!authCookie) {
            test.fail(true, 'No authentication cookie found');
        }

        const response = await request.post(`${baseUrl}/changePassword`, {
            data: {
                currentPassword: 'WrongPassword',
                newPassword: 'AnotherPassword@123'
            },
            headers: {
                Cookie: `username=${authCookie}`
            }
        });

        expect(response.status()).toBe(400);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Current password is incorrect');
    });

    test('should fetch age-based recommendations when authenticated', async ({ request }) => {
        if (!authCookie) {
            throw new Error('No authentication cookie found');
        }

        const response = await request.get(`${baseUrl}/detectAge`, {
            headers: {
                Cookie: `username=${authCookie}`
            }
        });

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty('message');
    });

    test('should not fetch recommendations when unauthorized', async ({ request }) => {
        const response = await request.get(`${baseUrl}/detectAge`);

        expect(response.status()).toBe(401);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Unauthorized: No username found');
    });

    test('should logout successfully', async ({ request }) => {
        const response = await request.post(`${baseUrl}/logout`);

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty('message', 'Logged out successfully');
    });

    test('should not access protected routes after logout', async ({ request }) => {

        await request.post(`${baseUrl}/logout`);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const response = await request.get(`${baseUrl}/detectAge`);

        console.log('Protected route response after logout:', await response.json());

        expect(response.status()).toBe(401);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Unauthorized: No username found');
    });

});
