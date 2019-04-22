const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        if (config.mode === 'production') {
            if (Array.isArray(config.optimization.minimizer)) {
                config.optimization.minimizer.push(
                    new OptimizeCSSAssetsPlugin({})
                )
            }
        }




        return config
    }
};

module.exports = withCss(withPurgeCss());