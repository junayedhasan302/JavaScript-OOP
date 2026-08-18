/**
 * Student-এর যে data থাকবে:
 * name
 * email
 * age
 * marks
 */

class Student {
    name: string;       // Student-এর নাম
    email: string;      // Student-এর email
    age: number;       // Student-এর বয়স
    marks: number;      // Student-এর marks

    // constructor → object তৈরি হওয়ার সময় automatically call হয়
    constructor(
        name: string,
        email: string,
        age: number,
        marks: number
    ) {
        this.name = name;       // current object-এর name সেট করা হচ্ছে
        this.email = email;     // current object-এর email সেট করা হচ্ছে
        this.age = age;         // current object-এর age সেট করা হচ্ছে
        this.marks = marks;    // current object-এর marks সেট করা হচ্ছে
    }
}


// instantiate / instance
// new Student() দিয়ে Student class-এর object তৈরি করা হচ্ছে

const junayed = new Student(
    "Junayed Hasan",
    "junayedhasan302@gmail.com",
    22,
    100
)


// আরেকটি Student object তৈরি করা হচ্ছে
const hasan = new Student(
    "Hasan",
    "hasan@gmail.com",
    21,
    200
)


// hasan object-এর সম্পূর্ণ data console-এ দেখানো হচ্ছে
console.log(junayed);
console.log(hasan);