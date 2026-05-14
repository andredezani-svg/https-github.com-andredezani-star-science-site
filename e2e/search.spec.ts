import { test, expect } from '@playwright/test'

test.describe('Search page', () => {
  test('renders search form', async ({ page }) => {
    await page.goto('/search')
    await expect(page.locator('h1')).toContainText('Search')
    await expect(page.locator('input[name="q"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toContainText('Search')
  })
})
