import { test, expect } from '@playwright/test'

test.describe('Error pages', () => {
  test('404 page renders for unknown routes', async ({ page }) => {
    await page.goto('/this-path-does-not-exist-xyz')
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible()
    await expect(page.locator('text=BACK TO HOME')).toBeVisible()
  })

  test('error page renders with message', async ({ page }) => {
    await page.goto('/error')
    await expect(page.locator('text=Something went wrong')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Try Again' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Go Home' })).toBeVisible()
  })

  test('error page shows specific error messages', async ({ page }) => {
    await page.goto('/error?error=AccessDenied')
    await expect(page.locator('text=do not have access')).toBeVisible()

    await page.goto('/error?error=Verification')
    await expect(page.locator('text=invalid or has expired')).toBeVisible()

    await page.goto('/error?error=Configuration')
    await expect(page.locator('text=server configuration')).toBeVisible()
  })
})
