module.exports = {
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testPathIgnorePatterns: [
    "/node_modules"
  ],
  setupFilesAfterEnv:[
    "<rootDir>/src/tests/setup-tests.ts",
  ],
  setupFiles: ['./jest.polyfills.js'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest"
  },
  moduleNameMapper:{
    "^.+\\.(css|less|scss)$": "<rootDir>/node_modules/babel-jest",
    '@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',

}
