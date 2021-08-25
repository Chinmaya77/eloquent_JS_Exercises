"use strict";
let countBs = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B") {
      count++;
    }
  }
  console.log(count);
};

let countChar = function (a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      count++;
    }
  }
  console.log(count);
};
countBs("hinBnuhdhsBB");
countChar("aasdfghzgg", "z");
