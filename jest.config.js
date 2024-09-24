module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [ 'jest-styled-components', 'jest-canvas-mock'],
    "collectCoverage": true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.stories.js',
      '!src/**/*.stories.ts',
      '!src/**/*.stories.tsx',
      '!**/mocks/**/*',     
      "!src/**/!(*.styles).ts",
      '!src/Routes/index.tsx',
      '!src/reportWebVitals.js',
      '!src/setupTests.js' 
    ],
  };