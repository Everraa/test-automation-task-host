import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 60000, 
    retries: 0,
    testDir: 'tests/',
    use: {
        baseURL: 'https://lightgrey-antelope-m7vwozwl8xf7l3y2.builder-preview.com/',
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium', 
            use: {browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'},
        },
    ],
}

export default config