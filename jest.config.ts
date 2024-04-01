export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "!stories.tsx"];
export const snapshotSerializers = ["enzyme-to-json/serializer"];
export const rootDir = "../../";
export const transformIgnorePatterns = ["<rootDir>/node_modules/(?!(@storybook/addon-docs)/)"];
export const collectCoverage = !process.env.VISUAL_TEST;
export const preset = "ts-jest";
export const testEnvironment = "jsdom";
export const testMatch = [`<rootDir>/src/**/*.spec.{js,ts,tsx}`];
export const collectCoverageFrom = ["<rootDir>/packages/src/**/*.{ts,tsx,js,jsx}"];
export const setupFilesAfterEnv = ["<rootDir>/.jest/register-context.js"];
export const coverageThreshold = {
    global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
    },
};
export const coverageDirectory = "<rootDir>/coverage";
export const coverageReporters = ["lcov", "json"];
export const verbose = true;
export const transform = {
    "^.+\\.stories\\.tsx$": "@storybook/addon-storyshots/injectFileName",
    "^.+\\.ts|tsx$": "ts-jest",
    "^.+\\.js|jsx$": "<rootDir>/packages/sf-chat-widget/jestPreprocess.js",
};
export const moduleNameMapper = {
    "^root(.*)$": "<rootDir>/src/$1",
    "^react$": "<rootDir>/node_modules/react",
};
export const modulePaths = ["<rootDir>/", "<rootDir>/src"];
export const modulePathIgnorePatterns = ["<rootDir>/dist/"];
export const globals = {
    "ts-jest": {
        tsconfig: "<rootDir>/tsconfig.json",
    },
};
