module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './setup-tests.js',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // type: 'module',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    'node_modules/@gluestack-ui/themed/build/index.js': 'babel-jest',
  },
  verbose: true,
};

