import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('submits and redirects to thank-you', async ({ page }) => {
    await page.goto('/contact')

    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('textarea[name="message"]', 'Test message from E2E')

    await page.click('button[type="submit"]')

    await expect(page).toHaveURL(/\/thank-you/, { timeout: 15000 })
    await expect(page.locator('h1')).toContainText('Thank You')
  })

  test('shows error on invalid email', async ({ page }) => {
    await page.goto('/contact')

    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'not-an-email')
    await page.fill('textarea[name="message"]', 'Test message')

    await page.click('button[type="submit"]')

    await expect(page.locator('text=Invalid email')).toBeVisible({ timeout: 10000 })
  })
})
