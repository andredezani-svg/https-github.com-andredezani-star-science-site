import { test, expect } from '@playwright/test'

test.describe('Static pages', () => {
  const pages = [
    { url: '/', title: /StarScience Lab/ },
    { url: '/about', title: /About StarScience Lab/ },
    { url: '/services', title: /Our Services/ },
    { url: '/products', title: /Our Products/ },
    { url: '/process', title: /How It Works/ },
    { url: '/contact', title: /Contact Us/ },
    { url: '/faq', title: /Frequently Asked Questions/ },
    { url: '/privacy', title: /Privacy Policy/ },
    { url: '/terms', title: /Terms of Service/ },
    { url: '/blog', title: /Our Blog/ },
    { url: '/search', title: /Search/ },
    { url: '/thank-you', title: /Thank You/ },
  ]

  for (const pageInfo of pages) {
    test(`renders ${pageInfo.url}`, async ({ page }) => {
      await page.goto(pageInfo.url)
      await expect(page.locator('h1')).toContainText(pageInfo.title)
      expect(await page.locator('body').getAttribute('class')).toBeTruthy()
    })
  }
})
