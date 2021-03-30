function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
