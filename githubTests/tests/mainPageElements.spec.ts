import { test, expect, devices} from '@playwright/test';

const url= 'http://localhost:3000'
const selector = 'h1'

test ('open page', async ({ page }) => {
    await page.goto('http://localhost:3000');
//   expect(page.getByText('Phone Listings', {exact: true})).toBeVisible;
 await expect(page.getByText('Order now ->').first()).toBeVisible();
    
});

test('visibility', async ({ page }) => {
    await page.goto(url)
    const box = await page.locator(selector).boundingBox() // it contains x, y, width, and height only
    let isVisible = await page.evaluate((selector) => {
        let isVisible = false
        let element = document.querySelector(selector)
        if (element) {
            let rect = element.getBoundingClientRect()
            if (rect.top >= 0 && rect.left >= 0) {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                if (rect.right <= vw && rect.bottom <= vh) {
                    isVisible = true
                }
            }
        }
        return isVisible
    }, selector)
    await expect(isVisible).toBeTruthy()
});

