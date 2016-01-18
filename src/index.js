let vile = require("@brentlintner/vile")
let _ = require("lodash")
let constable = require("constable")
let Promise = require("bluebird")

const bower_file = "bower.json"

let punish = (plugin_data) =>
  new Promise((resolve, reject) =>
    constable.list((available) =>
      resolve(available.length <= 0 ? [] :
        _.map(available, (dep) =>
          vile.issue({
            type: vile.DEP,
            path: bower_file,
            message: `${dep.name} (${dep.version} < ${dep.latest})`,
            name: dep.name,
            current: dep.version,
            latest: dep.latest,
            signature: `constable::${dep.name}` +
                        `::${dep.version}::${dep.latest})`
          })))))

module.exports = {
  punish: punish
}
