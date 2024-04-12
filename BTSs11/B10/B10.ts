function calculate(width: number, height: number): number;
function calculate(width: number, height: number, radius: number): number;
function calculate(width: number, height: number, radius?: number): number {
    if (radius) return Math.PI * radius * 2;
    return (width + height)*2
}


class Shape {
    calculatePerimeter(): number {
        return calculate(this.width, this.height, this.radius);
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}

let rectangle = new Rectangle(20, 40);

let shape = new Circle(30);

console.log(rectangle.calculatePerimeter());

console.log(shape.calculatePerimeter());