#!/usr/bin/node
<<<<<<< HEAD
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
=======
const numArgs = process.argv.length - 2;
if (numArgs === 0) {
  console.log('No argument');
} else if (numArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
>>>>>>> refs/remotes/origin/main
