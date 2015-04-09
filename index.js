/* jshint node: true */
'use strict';

module.exports = {
  name: 'number-formatter',

  init: function () {
    this.treePaths['vendor'] = 'node_modules';
  },

  included: function () {
    this.app.import('vendor/number-formatter/lib/format.js');
  }
};
