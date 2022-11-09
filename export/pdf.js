const puppeteer = require("puppeteer");
const path = require("path");
 
(async () => {
  // Create browser instance
  const browser = await puppeteer.launch({
    headless: true,
  });
 
  // Create a new page
  const page = await browser.newPage();

  // Open URL in current page
  await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle2'
  });

  // Save PDF File
  await page.pdf({
    path: path.resolve(__dirname, '../public/resume.pdf'),
    format: 'a4'
  });

  // Close browser instance
  await browser.close();
})();