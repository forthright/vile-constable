let vile = require("@brentlintner/vile")
let _ = require("lodash")
let constable = require("constable")
let Promise = require("bluebird")

const bower_file = "bower.json"

let no_issue = () => [ vile.issue(vile.OK, bower_file) ]

let punish = (plugin_data) => {
  return new Promise((resolve, reject) => {
    constable.list((available) => {
      if (available.length > 0) {
        resolve(_.map(available, (dep) => {
          return vile.issue(
            vile.WARNING, bower_file,
            `${dep.name} (${dep.version} < ${dep.latest})`
          )
        }))
      } else {
        resolve(no_issue())
      }
    })
  })
}

module.exports = {
  punish: punish
}
