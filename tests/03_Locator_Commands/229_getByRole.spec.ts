import { test, expect } from '@playwright/test';

test("Verfiy the error message in the wingify free trial", async ({ page })=> {

await page.goto("https://app.wingify.com/#/login");
let username = page.locator('#login-username')
let password = page.getByLabel('Password', { exact: true })
// username.nth(1);
await username.fill('admin@vwo.com');
await password.fill('1234');

await page.pause();


})