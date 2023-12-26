const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['app/**/*.{ts,tsx}', 'utils/**/*.{ts,tsx}'],
  coverageReporters: [["text", { file: 'coverage.txt' }], ["text-summary", { file: 'summary.txt' }], "text-summary", "text"],
  coverageThreshold: {
    "global": {
      "branches": 1,
      "functions": 1,
      "lines": 1,
      "statements": 1
    }
  }

};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
