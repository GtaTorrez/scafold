const merge = require('webpack-merge');
const baseConfigGenerator = require('./webpack.base');
const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

function webpackEnviromentSelector(env) {
    let config;
    if (env.production) config = prodConfig;
    if (env.development) config = devConfig;

    const baseConfig = baseConfigGenerator(env)

    return merge(baseConfig, config);
}

module.exports = webpackEnviromentSelector;