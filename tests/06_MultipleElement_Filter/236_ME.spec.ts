import { test, expect, Locator } from '@playwright/test'

test('Basic verify how to handle multiple elements', async ({ page }) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightPanellinksText: Locator[] = await page.locator('a.list-group-item').all();

console.log(rightPanellinksText.length);

for(const link of rightPanellinksText){
    console.log(await link.getAttribute('href'));
}




})