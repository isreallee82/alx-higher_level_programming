#!/usr/bin/node
<<<<<<< HEAD
console.log(typeof process.argv[2] === 'undefined' ? 'No argument' : process.argv[2]);
=======
const firstArg = process.argv[2];
if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
>>>>>>> refs/remotes/origin/main
