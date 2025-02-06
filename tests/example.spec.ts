import { test, expect } from '@playwright/test';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

let serverProcess: ChildProcessWithoutNullStreams;
let serverUrl: string;

test.beforeAll(async () => {
    console.log('Starting server...');

    serverProcess = spawn('pnpm', ['dev'], { shell: true });

    serverUrl = await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('Server did not start in time (60s timeout)'));
        }, 60000); // Wait max 60 seconds

        serverProcess.stdout.on('data', (data) => {
            const output = data.toString();
            console.log(output); // Log server output for debugging

            const urlMatch = output.match(/http:\/\/localhost:(\d+)/);
            if (urlMatch) {
                clearTimeout(timeout);
                resolve(`http://localhost:${urlMatch[1]}`);
            }
        });

        serverProcess.stderr.on('data', (data) => {
            console.error(data.toString());
        });
    });

    console.log(`Server started at ${serverUrl}`);
}, 90000); // Allow up to 90s for the setup

test.afterAll(() => {
    console.log('Stopping server...');
    if (serverProcess) {
        serverProcess.kill('SIGTERM'); // Gracefully stop the server
    }
});

test('login flow', async ({ page }) => {
    console.log('Starting login test...');

    // Navigate to the homepage
    await page.goto(serverUrl, { timeout: 60000 });
    console.log(`Navigated to ${serverUrl}`);

    // Verify homepage title
    await expect(page.locator('h1')).toHaveText('Start Learning Colours!', { timeout: 20000 });
    console.log('Verified homepage title');

    // Click "Log In" and wait for navigation
    await page.click('text=Log In');
    console.log('Clicked Log In button');

    // Wait for login page to load
    await page.waitForURL(`${serverUrl}/login`, { timeout: 60000 });
    console.log('Navigated to login page');

    // Ensure username input is visible before filling
    await page.waitForSelector('input[name="username"]', { state: 'visible', timeout: 60000 });
    console.log('Username input is visible');

    // Fill in username and password
    await page.fill('input[name="username"]', 'libby');
    await page.fill('input[name="password"]', 'test');
    console.log('Filled login form');

    // Click "Login" button
    await page.click('button[type="submit"]');
    console.log('Clicked Login button');

    // Wait for dashboard navigation
    await page.waitForURL(`${serverUrl}/dashboard`, { timeout: 60000 });
    console.log('Navigated to dashboard');

    // Verify dashboard loaded
    await expect(page).toHaveURL(`${serverUrl}/dashboard`);
    console.log('Verified dashboard URL');
});
