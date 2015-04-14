/* jshint node: true */
'use strict';

var path = require('path');

var unwatchedTree = function (dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
};

module.exports = {
  name: 'number-formatter',

  treeFor: function (name) {
    if (name === 'vendor') {
      var treePath = path.join('node_modules', 'number-formatter', 'lib');
      return unwatchedTree(treePath);
    }
    return this._super.treeFor.apply(this, arguments);
  },

  included: function (app, parentAddon) {
    var target = parentAddon || app;
    target.import('vendor/format.js');
  }
};
