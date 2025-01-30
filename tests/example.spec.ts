import { test, expect } from '@playwright/test';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

let serverProcess: ChildProcessWithoutNullStreams;

test.beforeAll(async () => {
    serverProcess = spawn('pnpm', ['dev'], { shell: true });

    await new Promise((resolve) => {
        serverProcess.stdout.on('data', (data) => {
            if (data.toString().includes('http://localhost:3000')) {
                resolve(null);
            }
        });
    });
});

test.afterAll(() => {
    if (serverProcess) {
        serverProcess.kill('SIGTERM'); // Forcefully kill the process
    }
});

test('basic navigation and form submission', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3001');

    // Check that the h1 tag has the correct text
    await expect(page.locator('h1')).toHaveText('Start Learning Colours!');

    // Fill in the form fields
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation or any other action after form submission
    await page.waitForNavigation();

    // Check that the form submission was successful
    await expect(page.locator('.success-message')).toHaveText('Form submitted successfully!');
});