
var func = require('./core/function');

console.log("Start process ...");
console.log("Initialize number ...");
var number_one = 56;
console.log("The number is "+number_one+".");
console.log("Calculating the square of the number ...");
var square = func.square(number_one);
console.log("The result is ",square);
console.log("Calculating the square root of the number ...");
console.log("The result should be "+number_one+" and the result is ",func.root_square(square));
