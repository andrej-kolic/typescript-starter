// module.exports = {
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   testEnvironment: 'node',
//   testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   roots: ['<rootDir>/src'],
// };

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
