// ==================================================
// PARENT CLASS / SUPER CLASS
// ==================================================

// User হলো Parent Class / Super Class
// Student পরে এই class থেকে কিছু property ও method পাবে

class User {
  // private → শুধু User class-এর ভিতরে access করা যাবে
  private _name: string;
  // private → শুধু User class-এর ভিতরে access করা যাবে
  private _age: number;
  // protected → User class এবং User-এর child class
  // দু জায়গা থেকেই access করা যাবে
  protected _email: string;
  // Constructor
  // User object তৈরি করার সময় name, age, email নেওয়া হবে
  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
  // Getter
  // বাইরে থেকে age দেখার সুযোগ দিচ্ছে
  get age() {
    return this._age;
  }
  // Setter
  // age পরিবর্তন করার আগে validation করবে
  set age(value: number) {
    // Age 0-এর কম অথবা 100-এর বেশি হলে
    // error দেখাবে
    if (value < 0 || value > 100) {
      throw new Error("Age is not valid!");
    }
    this._age = value;
  }
}

// ==================================================
// CHILD CLASS
// ==================================================

// Student হলো User-এর Child Class
// extends ব্যবহার করে User থেকে inherit করছে

class Student extends User {
  // Student-এর নিজের extra property
  private _fee: number;
  // Student-এর constructor
  constructor(name: string, age: number, email: string, fee: number) {
    // super() → Parent class-এর constructor call করে
    // Parent-এর name, age, email initialize করবে
    super(name, age, email);
    // Student-এর নিজের property initialize করা হচ্ছে
    this._fee = fee;
  }
  // Student class-এর নিজের getter
  // Parent class-এর protected _email access করছে
  get email() {
    return this._email;
  }
}

// ==================================================
// OBJECT / INSTANCE
// ==================================================

// Student class থেকে একটি Student object তৈরি করা হচ্ছে
const student = new Student("Rafi", 16, "rafi@gmail.com", 2000);
// Student-এর age পাওয়া যাচ্ছে
// age Parent class User থেকে এসেছে
console.log(student.age);
// Output:
// 16
// Student-এর email-ও পাওয়া যাবে
// কারণ _email protected এবং Student child class
// হিসেবে সেটি access করতে পারছে
console.log(student.email);
// Output:
// rafi@gmail.com