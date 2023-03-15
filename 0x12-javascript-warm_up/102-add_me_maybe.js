#!/usr/bin/node
<<<<<<< HEAD
exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
=======
module.exports = {
  addMeMaybe: function (n, f) {
    return f(n + 1);
  }
>>>>>>> refs/remotes/origin/main
};
