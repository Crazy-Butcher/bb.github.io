class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let width = 300;
let height = 100;
let color = "f0f00f";

let rect1 = new Rectangle(width, height);
console.log(`Площадь прямоугольника с шириной ${rect1.width} и высотой ${rect1.height} равна ${rect1.calcArea()}. А периметр - ${rect1.calcPerimeter()}`);

class ColoredRectangle extends Rectangle {
    constructor(width, height, bgColor, text) {
        super(width, height);
        this.bgColor = bgColor;
        this.text = text;
    }

    showProperties() {
        alert(`
               Ширина: ${this.width}\n
               Высота: ${this.height}\n
               Текст: ${this.text}`)
    }

    createDiv() {
        let div = document.createElement('div');

        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.textContent = this.text;
        div.style.backgroundColor = '#'+ this.bgColor;
        
        div.style.filter = `hue-rotate(180deg)`;

        return div;
    }
}

let coloredRect1 = new ColoredRectangle(width, height, color, "Привет!")
document.body.prepend(coloredRect1.createDiv());

class Circle {
    constructor(name, radius, bgColor) {
        this.name = name;
        this.radius = radius;
        this.bgColor = bgColor;
        this.borderColor = this.bgColor;

        this.getDiameter = function() {
            return this.radius * 2;
        }
    }

    calcArea() {
        return Math.round(Math.PI * this.radius ** 2);
    }

    calcLength() {
        return Math.round(Math.PI * this.getDiameter());
    }

    changeName(newName) {
        this.name = newName;
    }

    createDivCircle() {
        let div = document.createElement('div');

        div.style.width = this.getDiameter() + 'px';
        div.style.height = this.getDiameter() + 'px';
        div.style.backgroundColor = this.bgColor;
        div.style.borderWidth = '5px';
        div.style.borderStyle = 'solid';
        div.style.borderColor = '#00f0f0';

        div.style.borderRadius = '50%';

        return div;
    }
}

let countCircles = 3;
let circle;

let propCircle = {
    name: ['A', 'B', 'C'],
    radius: [100, 250, 150],
    bgColor: ['#ff0000', '#00ff00', '#0000ff']
};

for (let i = countCircles - 1; i >= 0; i--) {
    
    circle = new Circle(propCircle.name[i],
                        propCircle.radius[i],
                        propCircle.bgColor[i]);

    document.body.prepend(circle.createDivCircle());
}