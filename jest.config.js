// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        lib: '<rootDir>/src/index'
    },

    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
