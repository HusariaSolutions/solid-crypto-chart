/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'solid-jest/preset/browser',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
}
