import { test, expect } from "@playwright/test";
// load session here

test.use({
    storageState: './user-session.json',
    screenshot: "only-on-failure",

});


test('go directly to dashboard — Test1', async({ page })=> {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316")
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed");

        await page.waitForTimeout(3000);

});

test('', async ({ page })=>{

    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard loaded - no login needed");
    await page.waitForTimeout(3000);

});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});