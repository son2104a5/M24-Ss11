"use strict";
function calculate(width, height, radius) {
    if (radius)
        return Math.PI * radius * 2;
    return (width + height) * 2;
}
class Shape {
    calculatePerimeter() {
        return calculate(this.width, this.height, this.radius);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
let rectangle = new Rectangle(20, 40);
let shape = new Circle(30);
console.log(rectangle.calculatePerimeter());
console.log(shape.calculatePerimeter());
