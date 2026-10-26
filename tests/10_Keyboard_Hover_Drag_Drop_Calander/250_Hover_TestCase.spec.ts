import { test, expect, Locator } from '@playwright/test';

test("Verify Hover for Drag and Drop", async ({ page}) => {
await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

// const columnA = page.locator('#column-a');
// const columnB = page.locator("#column-b");

// await columnA.dragTo(columnB, { force: true });

const card = page.getByTestId('card-write-spec');
const inProgress = page.locator('[data-status="in-progress"]');

await card.dragTo(inProgress);


await page.pause();


})