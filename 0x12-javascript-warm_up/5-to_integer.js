#!/usr/bin/node
<<<<<<< HEAD
const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
=======
const convertArg = parseInt(process.argv[2]);
if (isNaN(convertArg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + convertArg);
}
>>>>>>> refs/remotes/origin/main
