# test-automation-task-host
This repository contains automated tests for web applications using Playwright. Follow the steps below to clone, set up, and execute the tests.

## Prerequisites
Ensure you have the following installed on your machine:
Node.js (Version 16 or higher)
Git 

## Clone the Repository
git clone https://github.com/Everraa/test-automation-task-host.git

## Install Dependencies
npm install

## Install Playwright Browsers
npx playwright install

## To run Tests in: 
    1. Chromium - npm run tests:chrome
    2. Firefox - npm run tests:firefox
    3. Webkit - npm run tests:webkit

By default, all tests are run in headless mode (browsers will not open). To run tests in headed mode, modify the command by adding :headed in the end.