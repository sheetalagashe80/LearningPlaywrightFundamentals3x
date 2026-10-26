 import { test, expect, Locator } from '@playwright/test';
 import path from 'path';

 const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/" ;

 test.describe('File Upload handling', () => {


    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });

    test('locate FileUpload and upload', async ({ page }) => {

        // File Upload
        // path of the file - You should have
        
        await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: 'file3.jpg',
                mimeType: 'impage/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')


            },{
                name: 'file4.jpg',
                mimeType: 'impage/jpeg',
                buffer: Buffer.from('this is a test')

            }]);

            await page.locator(".pf-v6-c-button.pf-m-secondary").click();
            await page.pause();

    })















 })