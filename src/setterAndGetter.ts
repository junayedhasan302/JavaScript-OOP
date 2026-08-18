/*
    STORY:

    Junayed-এর User Account আছে।

    User-এর:
    - name
    - age
    - email

    এগুলো private রাখা হয়েছে।
    তাই বাইরে থেকে সরাসরি access করা যাবে না।

    কিন্তু age দেখতে এবং change করতে হবে।

    এজন্য আমরা:
    getter → age দেখার জন্য
    setter → age পরিবর্তন করার জন্য

    ব্যবহার করবো।
*/


class User {
    // Private properties
    // এগুলো class-এর বাইরে সরাসরি access করা যাবে না
    private _name: string;
    private _age: number;
    private _email: string;
    // Constructor:
    // User তৈরি করার সময় information নেওয়া হচ্ছে
    constructor(name: string,age: number,email: string){
        this._name = name;
        this._age = age;
        this._email = email;
    }
    // GETTER
    // Private age বাইরে থেকে দেখার জন্য ব্যবহার করা হচ্ছে
    get age() {
        return this._age;
    }

    // SETTER
    // Private age-এর নতুন value দেওয়ার জন্য ব্যবহার করা হচ্ছে

    set age(value: number) {
        // Age valid কিনা check করা হচ্ছে
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid!");
        }
        // Age valid হলে নতুন age save করা হবে
        this._age = value;
    }
}



// --------------------------------------------------
// User Object তৈরি করা হচ্ছে
// --------------------------------------------------

const user = new User(
    "Junayed Hasan",
    22,
    "junayedhasan302@gmail.com"
);


// Setter কাজ করছে
// user.age = 30
// এখানে setter automatically call হবে

user.age = 30;


// Getter কাজ করছে
// user.age
// এখানে getter automatically call হবে

console.log(user.age);