"use strict";
let isEven = function (n) {
  if (n === 0) {
    console.log("true");
  } else if (n === 1) {
    console.log("false");
  } else {
    isEven(n - 2);
  }
};
isEven(12);
