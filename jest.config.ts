import type { Config } from "jest";
const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^next/link$": "<rootDir>/__mocks__/next-link.tsx",
    "^next/server$": "<rootDir>/__mocks__/next-server.ts",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: { jsx: "react-jsx" } }],
  },
};
export default config;
