class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.length = Math.sqrt(this.x * this.x + this.y * this.y);
  }
  plus(v) {
    return `Vec{x : ${this.x + v.x}, y : ${this.y + v.y} }`;
  }
  minus(v) {
    return `Vec{x : ${this.x - v.x}, y : ${this.y - v.y} }`;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
