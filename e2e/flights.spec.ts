import { test, expect } from '@playwright/test'

test('home page is working as expected', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: /Welcome to Schiphol Flights/ })).toBeVisible()

  const searchInput = page.getByPlaceholder('Enter destination or flight number')
  await searchInput.fill('Lon')

  const section = page.getByTestId('flight-results')
  const londonLinks = section.locator('a:has-text("Lon")')

  await expect(londonLinks).toHaveCount(5)
})

test('flights page is working as expected', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'All Flights' }).click()

  await expect(page.getByRole('heading', { name: 'All Flights' })).toBeVisible()

  expect(await page.getByRole('link').count()).toBeGreaterThan(0)
})
