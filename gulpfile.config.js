'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        //Don't hurt me AC :-)
        this.source = './src/';
        this.sourceApp = this.source + 'app/';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/globals/**/*.ts';
    }
    return gulpConfig;
})();

module.exports = GulpConfig;
