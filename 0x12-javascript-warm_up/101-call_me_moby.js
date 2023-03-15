#!/usr/bin/node
<<<<<<< HEAD
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
=======
module.exports = {
  callMeMoby: function (n, f) {
    for (let i = 0; i < n; i++) {
      f();
    }
  }
>>>>>>> refs/remotes/origin/main
};
