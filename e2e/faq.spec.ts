import { test, expect } from '@playwright/test'

test.describe('FAQ page', () => {
  test('toggles FAQ accordion items', async ({ page }) => {
    await page.goto('/faq')

    const faqSection = page.locator('#faq-accordion')
    const buttons = faqSection.locator('button')

    const firstButton = buttons.first()
    await expect(firstButton).toBeVisible()

    const isExpanded = await firstButton.getAttribute('aria-expanded')
    expect(isExpanded === 'false' || isExpanded === '' || isExpanded === null).toBe(true)

    await firstButton.click()
    await expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    await firstButton.click()
    await expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})
