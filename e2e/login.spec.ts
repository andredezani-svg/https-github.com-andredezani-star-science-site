import { test, expect } from '@playwright/test'

test.describe('Login page', () => {
  test('renders login form', async ({ page }) => {
    await page.goto('/login')
    await expect(page.locator('h1')).toContainText('Sign In')
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toContainText('Send Magic Link')
  })
})
