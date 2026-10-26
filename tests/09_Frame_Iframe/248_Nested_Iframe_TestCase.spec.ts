import { test, expect, Locator, FrameLocator } from '@playwright/test';

test("Verify Advance Custom DropDowns", async({ page }) => {

await page.goto("https://selectorshub.com/iframe-scenario/");

let frame1: FrameLocator = page.frameLocator('#pact1');
let frame2: FrameLocator = frame1.frameLocator('#pact2');
let frame3: FrameLocator = frame2.frameLocator('#pact3');

// await frame1.locator('inp_val').first().fill('abc');
await page.frameLocator('#pact1').getByRole('textbox', { name: 'First Crush' })
//await frame2.locator('#jex').fill('wife');
await page.frameLocator('#pact1').frameLocator('#pact2').getByRole('textbox', { name: 'Current Crush Name' })
//await frame3.locator('#glaf').fill('Playwright');
await page.frameLocator('#pact1').frameLocator('#pact2').frameLocator('#pact3').getByRole('textbox', { name: 'Destiny' })


await page.waitForTimeout(5000);




})