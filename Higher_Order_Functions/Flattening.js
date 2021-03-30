/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/

"use strict";

function reduce(array, combine) {
  let current = 0;

  let curr = [];
  for (let element of array) {
    current = combine(current, element);

    curr = curr.concat(current);
  }
  return curr;
}

console.log(reduce([[1, 2, 3], [4, 5], [6]], (a, b) => b));
