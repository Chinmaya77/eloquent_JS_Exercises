"use strict";
//let arr = [];

let range = function (start, end, step = 1) {
  let array = [];

  for (let i = start; i <= end; i = i + step) {
    // arr = i;
    array = array.concat(i);
  }

  return array;
};

let sum = function (array) {
  let s = 0;

  for (let element of array) {
    s += element;
  }
  return s;
};
console.log(range(1, 10));
console.log(sum(range(1, 10, 1)));
console.log(sum(range(1, 10)));
