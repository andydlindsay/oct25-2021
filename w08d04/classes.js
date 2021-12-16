// const Rectangle = class {};
class Rectangle {
  constructor(width, length) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const myRectangle = new Rectangle(2, 4);
console.log(myRectangle);
console.log(myRectangle.area());

class RectangularPrism extends Rectangle {
  constructor(width, length, height) {
    super(width, length);
    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }
}

const myRectangularPrism = new RectangularPrism(3, 5, 7);
console.log(myRectangularPrism);
console.log(myRectangularPrism.volume());

const volume = myRectangularPrism.volume;
volume();
