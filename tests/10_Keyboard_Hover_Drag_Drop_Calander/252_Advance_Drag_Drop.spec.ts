import { test, expect, Locator, Page } from '@playwright/test';

// test("Verify Drag and Drop in Kanban Board", async ({ page }) => {

//    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd"); 

//    let source:Locator = page.locator('#card-review-pr-21');
//    const sBox = (await source.boundingBox())!;

//    let target: Locator = page.locator('[data-status="review"]');
//    const tBox = (await target.boundingBox())!;

//    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
//    await page.mouse.down();

//    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 20});
//     await page.mouse.up();

//     await page.waitForTimeout(20000);

// })


async function manualDrag(page: Page, source: Locator, target: Locator) {
  const sourceBox = await source.boundingBox();
  const targetBox = await target.boundingBox();

  if (!sourceBox || !targetBox) {
    throw new Error('Drag source or target is not visible');
  }

  await page.mouse.move(
    sourceBox.x + sourceBox.width / 2,
    sourceBox.y + sourceBox.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(
    targetBox.x + targetBox.width / 2,
    targetBox.y + targetBox.height / 2,
    { steps: 10 }
  );
  await page.mouse.up();
}

test('Drag and drop cards on the Kanban board', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

  await page.getByTestId('card-write-spec')
    .dragTo(page.getByTestId('col-in-progress'));

  await expect(page.getByTestId('count-in-progress')).toHaveText('1');

  await manualDrag(
    page,
    page.getByTestId('card-fix-bug-42'),
    page.getByTestId('col-done')
  );

await expect(page.getByTestId('board-output'))
  .toContainText('"fix-bug-42"');


  //page.waitForTimeout(10000);
});