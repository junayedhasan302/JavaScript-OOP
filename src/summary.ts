// ============================================================
// 1. INHERITANCE + METHOD OVERRIDING + POLYMORPHISM
// ============================================================


// Parent Class / Super Class
class Animal {

    // Private property
    // শুধু Animal class-এর ভিতরে access করা যাবে
    private _name: string;


    // Constructor
    constructor(name: string) {
        this._name = name;
    }


    // Parent class-এর method
    makeSound(): void {
        console.log("Animal can make sound");
    }
}


// Child Class
// Cat, Animal class থেকে inherit করছে
class Cat extends Animal {

    // Method Overriding
    // Parent-এর makeSound() method-এর নিজের version
    makeSound(): void {
        console.log("Meowwwwwwww");
    }
}


// Cat object / instance
const cat = new Cat("Billu");

// Cat-এর makeSound() call
cat.makeSound();

// Output:
// Meowwwwwwww



// ------------------------------------------------------------
// Dog Class
// ------------------------------------------------------------

class Dog extends Animal {

    // Method Overriding
    makeSound(): void {
        console.log("Whoof whoof!");
    }
}


// Dog object / instance
const dog = new Dog("Tommy");

// Dog-এর makeSound() call
dog.makeSound();

// Output:
// Whoof whoof!



// ============================================================
// 2. POLYMORPHISM
// ============================================================

// Animal type-এর একটি array
// এর মধ্যে Cat এবং Dog দুটোই রাখা যাচ্ছে
const animals: Animal[] = [
    new Cat("Billu"),
    new Dog("Tommy")
];


// একই method call করা হচ্ছে
// কিন্তু object অনুযায়ী different output আসছে

animals.forEach(animal => {
    animal.makeSound();
});

// Output:
// Meowwwwwwww
// Whoof whoof!


// Same method
// Different behaviour
// = Polymorphism



// ============================================================
// 3. ABSTRACTION
// ============================================================

// Abstract class
// Shape শুধু একটি blueprint / rule তৈরি করছে

abstract class Shape {

    // Abstract method
    // শুধু বলে দেওয়া হচ্ছে যে
    // প্রত্যেক Shape-এর area() method থাকতে হবে
    //
    // এখানে method-এর body নেই

    abstract area(): number;


    // Normal method
    // Child classes এই method inherit করবে

    describe(): void {
        console.log("This is a shape");
    }
}



// ============================================================
// 4. CIRCLE
// ============================================================

class Circle extends Shape {

    // Circle-এর নিজের property
    radius: number;


    // Constructor
    constructor(radius: number) {

        // Parent class-এর constructor call
        super();

        this.radius = radius;
    }


    // Abstract method implement করা হচ্ছে
    area(): number {
        return 3.1416 * this.radius * this.radius;
    }
}


// Circle object তৈরি
const circle = new Circle(5);


// Circle-এর area বের করা
console.log(circle.area());

// Output:
// 78.54


// Parent class-এর normal method
circle.describe();

// Output:
// This is a shape



// ============================================================
// 5. RECTANGLE
// ============================================================

class Rectangle extends Shape {

    // Rectangle-এর properties
    height: number;
    width: number;


    // Constructor
    constructor(height: number, width: number) {

        // Parent class-এর constructor call
        super();

        this.height = height;
        this.width = width;
    }


    // Abstract area() method implement করা হচ্ছে
    area(): number {
        return this.height * this.width;
    }
}


// Rectangle object তৈরি
const rectangle = new Rectangle(4, 5);


// Rectangle-এর area বের করা
console.log(rectangle.area());

// Output:
// 20


// Parent-এর normal method
rectangle.describe();

// Output:
// This is a shape



// ============================================================
// 6. USEFUL JAVASCRIPT BUILT-IN METHODS
// ============================================================


// Math.floor()
// Decimal number নিচের পূর্ণসংখ্যায় নামিয়ে আনে

console.log(Math.floor(4.8));

// Output:
// 4



// Math.ceil()
// Decimal number উপরের পূর্ণসংখ্যায় উঠিয়ে দেয়

console.log(Math.ceil(4.2));

// Output:
// 5



// Math.random()
// 0 থেকে 1-এর মধ্যে random number দেয়

console.log(Math.random());


// Example output:
// 0.583742...



// Date
// বর্তমান date এবং time তৈরি করে

const d = new Date();

console.log(d);

// Example output:
// Tue Aug 18 2026 19:00:00 ...