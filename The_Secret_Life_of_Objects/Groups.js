"use strict";
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    // if (!this.has(value)) return this;
    this.members = this.members.filter((m) => m !== value);
  }

  has(value) {
    if (this.members.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  static from(v) {
    let group = new Group();
    for (let value of v) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));
