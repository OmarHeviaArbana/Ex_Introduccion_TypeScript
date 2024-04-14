function printArray(array) {
    console.log(array.slice(1).join(',')); // code to print the array on console
}
var array = [2, 3, 4];
console.log(array[0]); //2
printArray(array); // 3,4
array.push(5);
console.log(array[array.length - 1]); //5
printArray(array); // 3,4,5
array.pop();
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.shift();
array.unshift(8);
printArray(array); // 8,3,4,1
var everyisgreater = array.every(function (num) { return num > 3; }); //check if every number is greater than 3
console.log(everyisgreater); //false
var everyisless = array.every(function (num) { return num < 10; }); // check if every number is less than 10
console.log(everyisless); //true
console.log(array.sort()); //1,3,4,8
console.log(array.reverse()); //8,4,3,1
