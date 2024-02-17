// BASICS
const pet = { species: "Dog", name: "Elton", age: 1.5 };

pet[1] = "Tuedon";
pet["1"] = "Tuoyo";

// All keys get stringified
pet.scream = function () {
  return "JESUS";
};

//  Area of a triangle

function getTriangleArea(a, b) {
  return (a * b) / 2;
}

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ^ (2 + b) ^ 2);
}

// store these in an object

let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ^ (2 + this.b) ^ 2);
  },
};
// not repeatable

// CLASSES BASICS
class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error("Invalid");
    }
    if (!Number.isFinite(b) || b <= 0) {
      throw new Error("Invalid");
    }
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ^ (2 + this.b) ^ 2);
  }

  sayHi() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()}`;
  }
}

// CLASSES WITH  CONSTRUCTOR
class TriangleWithConstructor {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error("Invalid");
    }
    if (!Number.isFinite(b) || b <= 0) {
      throw new Error("Invalid");
    }
    this.a = a;
    this.b = b;
  }
}

class shyTriangle extends Triangle {
  describe() {
    return "(runs and hides)";
  }
}
class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

// Static Properties example

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.species = breed;
  }

  // static methods
  static meow() {
    return `The ${this.breed} cat says MEOW!!`;
  }
  // it does not vary so we put a static property
  static species = "flelis catus";
}

class ArrayUtils {
  constructor() {
    throw Error("ArrayUtils cannot be instantiated.");
  }
  static average(array) {
    if (Array.isArray(array)) {
      let sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }
      return sum / array.length;
    }
  }

  static max(array) {
    if (Array.isArray(array)) {
      let maxNumber = 0;
      for (var i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
          maxNumber = array[i];
        }
      }

      return maxNumber;
    }
  }
}

console.log(ArrayUtils.max([1, 2, 3, 4]));
