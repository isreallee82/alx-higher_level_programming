#!/usr/bin/node
<<<<<<< HEAD
function add (a, b) {
  return a + b;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
=======
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);
function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a + b;
}
console.log(add(first, second));
>>>>>>> refs/remotes/origin/main
