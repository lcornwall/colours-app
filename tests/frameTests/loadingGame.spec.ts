import { test, expect } from '@playwright/test';

test.describe('3-4 Age Range Frame Visual Checks', () => {
    test('should show correct elements for Frame 1 and Frame 2', async ({ page }) => {
        await page.goto('/dashboard');
        await expect(page).toHaveURL(/dashboard/);

        await page.getByRole('button', { name: /3-4/i }).click();
        await expect(page).toHaveURL(/gamePage\/3-4/);

        await page.waitForTimeout(1000);

        await expect(page.getByText(/Hello!.*Kakka.*Gabbu.*rose colour/i)).toBeVisible();
        await expect(page.getByRole('button', { name: /Click to Play!/i })).toBeVisible();

        await page.getByRole('button', { name: /Click to Play!/i }).click();

        await page.waitForTimeout(1000);

        await expect(page.locator('img[src*="Gabbu"]')).toBeVisible();
        await expect(page.locator('img[src*="Kaka"]')).toBeVisible();
        await expect(page.getByText(/Gabbu.*rose colours/i)).toBeVisible();
    });
});
