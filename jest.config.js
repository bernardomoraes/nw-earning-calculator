module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.js'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.js'],
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  clearMocks: true
}
