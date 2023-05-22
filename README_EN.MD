# What is Puppeteer?
Puppeteer is a Node library that provides a high-level API to control Chromium or Chrome through the DevTools protocol. Puppeteer runs in headless mode by default but can be configured to run in a "headed" mode.

In simple terms, Puppeteer turns the Chrome browser installed on our local computer into a toolkit that can be run on any system.

Therefore, anything that can be done in a browser can also be achieved by calling Puppeteer's API.

## What are some common tasks performed by Puppeteer?
- Generating PDF pages
- Fetching content from Single-Page-Applications (SPAs) and rendering it
- Assisting in automation testing, including automated form submissions
- Simple web scraping, including crawling websites for content

We will learn about Puppeteer by going through each small demo in the demos directory:
- automation
- pdf
- screenshot
- seo
- simpleCrawler

To use the demos, first install the necessary dependencies by running `npm install` in the project's root directory. Then, to run the demo under the automation directory, enter `node demos/automation/index.js`, and similarly for the other demos.