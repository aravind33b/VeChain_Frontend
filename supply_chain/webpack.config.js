module.exports = {
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            // ... other polyfills if needed
        }
    },
    // ... rest of your Webpack configuration
};
