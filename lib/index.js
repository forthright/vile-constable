"use strict";

var vile = require("vile");
var _ = require("lodash");
var constable = require("constable");
var Promise = require("bluebird");

var bower_file = "bower.json";

var punish = function punish(plugin_data) {
  return new Promise(function (resolve, reject) {
    return constable.list(function (available) {
      return resolve(available.length <= 0 ? [] : _.map(available, function (dep) {
        return vile.issue({
          type: vile.DEP,
          path: bower_file,
          message: dep.name + " (" + dep.version + " < " + dep.latest + ")",
          signature: "constable::" + dep.name + ("::" + dep.version + "::" + dep.latest + ")"),
          dependency: {
            name: dep.name,
            current: dep.version,
            latest: dep.latest
          }
        });
      }));
    });
  });
};

module.exports = {
  punish: punish
};