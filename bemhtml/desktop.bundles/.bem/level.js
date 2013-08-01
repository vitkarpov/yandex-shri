var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'bem-controls/common.blocks',
                'bem-controls/desktop.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
            .concat([
                'common.blocks',
                'desktop.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); })))
    });

};
