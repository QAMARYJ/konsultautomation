import { test, expect } from '@playwright/test';

test('Navigate login Page', async ({ page }) => {
// Step 1: Navigate Login Page
    await page.goto('https://beacon-accountweb-dev.azurewebsites.net/login?callback=https%3A%2F%2Fbps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net%2F&aud=3AOw&origin=/');
// Step 2: Verify Login Page
    await expect(page.locator('#email')).toBeEnabled();
// Step 3: Input Email
   await page.locator('#email').fill('franklin@mailinator.com');
// Step 4: Input Password
    await page.locator('#password').fill('abcdE123!');
// Step 5: Click Login
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(10000);
//Step 6:  Access Patient Profile
//await expect ( page.locator('nav-item-patient-profiles')).toBeVisible();
//await page.locator('nav-item-patient-profiles').click();
    const patientitemsvisits = page.locator('#nav-item-visits');
    await expect(patientitemsvisits).toBeVisible();
    await patientitemsvisits.click();
    await page.waitForTimeout(10000);
// Step 7: Add new Visit
 const addvisits = page.locator('#add-new-user-button');
    await expect(addvisits).toBeVisible();
    await addvisits.click();
    await page.getByLabel('', { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.locator ('#item-search-by-patient-id').click();
    await page.locator('#profile-id').fill('896');
    await page.locator('#search-profile-info-btn').click();
   // await page.locator('MuiTableCell-root MuiTableCell-body MuiTableCell-alignCenter MuiTableCell-sizeMedium css-t0j').click();
    await page.locator('[class= "MuiTableCell-root MuiTableCell-body MuiTableCell-alignCenter MuiTableCell-sizeMedium css-t0j"]').first().click();
    await page.locator("#add_visit_id_896").click();
   //  await expect (page.locator('[class="go3958317564"]')).toHaveText('Visit created successfully');
})