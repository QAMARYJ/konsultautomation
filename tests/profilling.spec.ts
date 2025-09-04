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
    //    await page.locator('nav-item-patient-profiles').click();

    const patientprofilenav = page.locator('#nav-item-patient-profiles');
    await expect(patientprofilenav).toBeVisible();
    await patientprofilenav.click();
    await page.waitForTimeout(10000);
   // await page.locator('[data-testid ="EditIcon"]').first().click();
 //  await expect
    await page.locator('[data-testid ="EditIcon"]').nth(1).click();
   // TOASTER
    await page.locator("#submit-fab-button").click();
   // await expect (page.getByText('Record updated successfully')).toBeVisible();
//   await expect (page.locator('div[class="go3958317564"]')).toHaveText('Record updated successfully');
})
