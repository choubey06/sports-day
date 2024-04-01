import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        baseUrl: "http://localhost:8080",
        setupNodeEvents(on, config) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("@cypress/code-coverage/task")(on, config);
            return config;
        },
        testIsolation: false,
        retries: {
            runMode: 2,
        },
    },
});
