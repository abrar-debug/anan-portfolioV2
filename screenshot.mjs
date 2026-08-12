import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:5173", { waitUntil: "networkidle" });

await page.evaluate(async () => {
  const y = document.body.scrollHeight;
  for (let s = 0; s < y; s += 300) {
    window.scrollTo(0, s);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, y);
});
await page.waitForLoadState("networkidle");
await page.waitForTimeout(500);
await page.screenshot({ path: process.argv[2] + ".png" });
await browser.close();
