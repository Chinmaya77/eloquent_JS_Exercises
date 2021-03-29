"use strict";
let arr = [];
let arrayValue = [1, 2, 3, 4, 5];

let reverseArray = function (array) {
  let a = array.length - 1;
  for (let i = 0; i < array.length; i++, a--) {
    arr[a] = array[i];
  }
  return arr;
};

let reverseArrayInPlace = function (arrayValue) {
  //let a = arrayValue.length - 1;
  arrayValue = reverseArray(arrayValue);
  return arrayValue;
};

console.log(reverseArray(["A", "B", "C"]));
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//console.log(reverseArray([1,2,3,4,5]));
