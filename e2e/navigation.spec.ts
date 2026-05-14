import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('header links navigate to all pages', async ({ page }) => {
    await page.goto('/')

    const links = [
      { text: 'About', url: /\/about/ },
      { text: 'Services', url: /\/services/ },
      { text: 'Products', url: /\/products/ },
      { text: 'Process', url: /\/process/ },
      { text: 'FAQ', url: /\/faq/ },
    ]

    for (const link of links) {
      await page.getByRole('link', { name: link.text }).first().click()
      await expect(page).toHaveURL(link.url)
      await expect(page.locator('h1')).toBeVisible()
      await page.goBack()
    }
  })

  test('footer links work correctly', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('footer a:has-text("Home")')).toHaveAttribute('href', '/')
    await expect(page.locator('footer a:has-text("Privacy Policy")')).toHaveAttribute('href', '/privacy')
    await expect(page.locator('footer a:has-text("Terms of Service")')).toHaveAttribute('href', '/terms')
  })
})
