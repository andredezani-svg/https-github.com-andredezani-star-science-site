import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('loads and displays key content sections', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('h1')).toContainText('StarScience Lab', { timeout: 10000 })
    await expect(page.locator('text=Who We Are')).toBeVisible()
    await expect(page.locator('text=Why Choose Us')).toBeVisible()
    await expect(page.locator('text=Our Core Services')).toBeVisible()
    await expect(page.locator('text=Our Certifications')).toBeVisible()

    const phoneLinks = page.locator('text=(689) 322-1290')
    await expect(phoneLinks.first()).toBeVisible()
  })

  test('has working header logo and navigation', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header')).toBeVisible()
    const navLinks = page.locator('header a')
    const count = await navLinks.count()
    expect(count).toBeGreaterThan(5)
  })

  test('has working footer', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.locator('footer a:has-text("Home")')).toBeVisible()
    await expect(page.locator('footer a:has-text("Privacy Policy")')).toBeVisible()
    await expect(page.locator('footer a:has-text("Terms of Service")')).toBeVisible()
  })
})
