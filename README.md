# test-automation-task-host
This repository contains automated tests for web applications using Playwright. Follow the steps below to clone, set up, and execute the tests.

Prerequisites
Ensure you have the following installed on your machine:
Node.js (Version 16 or higher)
Git 

Clone the Repository
git clone https://github.com/Everraa/test-automation-task-host.git

Install Dependencies
npm install

Install Playwright Browsers
npx playwright install

Run Tests in: 
Chromium - npm run tests:chrome
Firefox - npm run tests:firefox
Webkit - npm run tests:webkit

By default, all tests are run in headed mode (browsers will open). To run tests in headless mode, modify the command by removing --headed from the script in the package.json file.