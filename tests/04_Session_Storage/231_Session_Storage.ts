import { chromium } from 'playwright';
import * as dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(__dirname, '.env') });
// credentials live in .env (gitignored) - never hardcode them in a public repo.

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;


async function saveSession() {
    if (!VWO_USER || !VWO_PASS) {
        throw new Error(`Missing VWO_USER or VWO_PASS. Check ${path.join(__dirname, '.env')}`);
    }

    console.log('Launching Playwright Chromium...');
    const browser = await chromium.launch({ headless: false });
    try {
        const context = await browser.newContext();
        const page = await context.newPage();

        console.log('Opening VWO login page...');
        await page.goto('https://app.wingify.com/#/login');

        await page.fill('#login-username', VWO_USER);
        await page.fill('#login-password', VWO_PASS);

        await page.click('#js-login-btn');
        await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });

        const storagePath = path.resolve(process.cwd(), 'user-session.json');
        await context.storageState({ path: storagePath });
        console.log(`Session saved to ${storagePath}`);
    } finally {
        await browser.close();
    }
}

saveSession().catch((error: unknown) => {
    console.error('Session setup failed:', error);
    process.exitCode = 1;
});