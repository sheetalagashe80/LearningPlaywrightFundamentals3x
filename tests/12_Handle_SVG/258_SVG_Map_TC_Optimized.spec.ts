 import { test, expect, Locator } from '@playwright/test';

 const SimpleMaps = "https://simplemaps.com/svg/country/in";

 test.describe('', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(SimpleMaps);


    });

    test(" locate SVG root and assert visible", async ({ page })=> {

            let allStates = await page.locator('path').all();
            for(const state of allStates){

                const className = await state.getAttribute('class');
                if(className?.endsWith("UP")){

                    await state.click();
                    console.log("Clicked on UP");
                }
            }


            await page.pause();


    })















 })