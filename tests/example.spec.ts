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
    serverProcess.kill();
});

test('basic navigation', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('h1')).toHaveText('Start Learning Colours!');
});
