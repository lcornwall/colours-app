import { test, expect } from '@playwright/test';

test.describe('Dashboard Navigation Tests', () => {
    test('Every age range button should navigate to correct gamePage and contain frame container', async ({ page }) => {
        await page.goto('/dashboard');
        await page.waitForLoadState('load');
        const ageRangesAndSeasons = ['3-4', '5-6', '6-7', '7-8', 'Seasons'];

        for (const item of ageRangesAndSeasons) {
            const button = page.locator(`button:has-text("${item}")`);
            await expect(button).toBeVisible();

            await button.click();
            await expect(page).toHaveURL(new RegExp(`gamePage/${item}`));

            const frameContainer = page.locator('div.frame-container');
            await expect(frameContainer).toBeVisible();

            await page.goto('/dashboard');
        }
    });
});
