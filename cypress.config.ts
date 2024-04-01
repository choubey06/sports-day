import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        setupNodeEvents(on, config) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("@cypress/code-coverage/task")(on, config);
            return config;
        },
        retries: {
            runMode: 2,
        },
        testIsolation: false,
    },
});
