#!/usr/bin/node
let myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function () {
<<<<<<< HEAD
  this.value++;
=======
  return this.value++;
>>>>>>> refs/remotes/origin/main
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
