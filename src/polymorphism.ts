/*
==================================================
STORY 1: ANIMAL WORLD
==================================================

আমাদের Animal World-এ বিভিন্ন ধরনের animal আছে।

প্রতিটি Animal sound করতে পারে।
কিন্তু কোন animal কী sound করবে,
সেটা animal-এর type-এর উপর নির্ভর করবে।

Animal → Parent Class
Cat    → Child Class
Dog    → Child Class
*/

// ==================================================
// PARENT CLASS
// ==================================================

class Animal {
    // Private property
    // Animal-এর নাম শুধু Animal class-এর ভিতরে থাকবে
    private _name: string;
    // Constructor
    // Animal তৈরি করার সময় name নেওয়া হবে
    constructor(name: string) {
        this._name = name;
    }
    // Parent class-এর method
    makeSound(): void {
        console.log("Animal can make sound");
    }
}



// ==================================================
// CHILD CLASS: CAT
// ==================================================
class Cat extends Animal {
    // Method Overriding
    // Parent-এর makeSound() method-এর নিজের version তৈরি করা হচ্ছে
    makeSound(): void {
        console.log("Meowwwwwwww");
    }
}


// Cat object তৈরি করা হচ্ছে
const cat = new Cat("Billu");
// Cat নিজের version-এর makeSound() ব্যবহার করবে
cat.makeSound();

// Output:
// Meowwwwwwww



// ==================================================
// CHILD CLASS: DOG
// ==================================================

class Dog extends Animal {
    // Parent-এর makeSound() method আবার override করা হচ্ছে
    makeSound(): void {
        console.log("Whoof whoof!");
    }
}


// Dog object তৈরি করা হচ্ছে
const dog = new Dog("Tommy");
// Dog নিজের version-এর makeSound() ব্যবহার করবে
dog.makeSound();
// Output:
// Whoof whoof!



/*
==================================================
POLYMORPHISM
==================================================

একই method:
    makeSound()

কিন্তু different object-এর জন্য
different behaviour:

Cat  → Meowwwwwwww
Dog  → Whoof whoof!

এটাই Polymorphism-এর basic idea।
*/


const animals: Animal[] = [
    new Cat("Billu"),
    new Dog("Tommy")
];

// একই method call করছি
// কিন্তু object অনুযায়ী different output আসছে
animals.forEach(animal => {
    animal.makeSound();
});

// Output:
// Meowwwwwwww
// Whoof whoof!





/*
==================================================
STORY 2: SHAPE CALCULATOR
==================================================
এখন আমরা একটি Shape Calculator বানাবো।

আমরা জানি:

Circle-এর area একভাবে calculate হয়।
Rectangle-এর area অন্যভাবে calculate হয়।

কিন্তু প্রত্যেক Shape-এর একটি area()
method থাকা বাধ্যতামূলক হবে।

এজন্য আমরা abstract class ব্যবহার করবো।
*/


// ==================================================
// ABSTRACT PARENT CLASS
// ==================================================
abstract class Shape {
    // Abstract method
    // এখানে শুধু বলা হচ্ছে:
    //
    // "প্রতিটি Shape-এর area() method থাকতে হবে।"
    //
    // কিন্তু কীভাবে area calculate হবে,
    // সেটা এখানে বলা হচ্ছে না।
    abstract area(): number;
    // Normal method
    // এই method child class automatically পাবে
    describe(): void {
        console.log("This is a shape");
    }
}



// ==================================================
// CIRCLE
// ==================================================
class Circle extends Shape {
    // Circle-এর নিজের property
    radius: number;
    // Constructor
    constructor(radius: number) {
        // Parent class-এর constructor call
        super();
        this.radius = radius;
    }


    // Abstract area() method implement করতে হবে

    area(): number {
        return 3.1416 * this.radius * this.radius;
    }
}



// Circle object তৈরি করা হচ্ছে
const circle = new Circle(5);
// Circle-এর area calculate করা হচ্ছে
console.log(circle.area());
// Output:
// 78.54


// Parent-এর normal method-ও ব্যবহার করা যাবে
circle.describe();
// Output:
// This is a shape





// ==================================================
// RECTANGLE
// ==================================================
class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number,width: number) {
        // Parent constructor call
        super();
        this.height = height;
        this.width = width;
    }
    // Rectangle-এর area calculation
    area(): number {
        return this.height * this.width;
    }
}



// Rectangle object তৈরি করা হচ্ছে
const rectangle = new Rectangle(4, 5);
// Rectangle-এর area
console.log(rectangle.area());
// Output:
// 20

2468
rectangle.describe();

// Output:
// This is a shape