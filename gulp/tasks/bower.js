var bower = require("bower");

module.exports = function (cb) {
  bower.commands.install([], {save: true}, {})
    .on("end", function (installed) {
      cb();
    });
};
