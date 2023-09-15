import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  "roots": [
    "<rootDir>/src" 
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

export default config;