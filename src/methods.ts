/*
    STORY:
    Junayed একজন student।
    তার কিছু basic information আছে:
    - Name
    - Email
    - Age
    - Marks

    Student class শুধু data রাখবে না,
    সে নিজের information-ও দেখাতে পারবে।
*/

class Student {
  // Student-এর basic information
  name: string;
  email: string;
  age: number;
  marks: number;

  // Constructor:
  // নতুন Student তৈরি করার সময় এই informationগুলো নেওয়া হবে
  constructor(name: string, email: string, age: number, marks: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.marks = marks;
  }

  // Method:
  // Student নিজের information দেখাতে পারবে
  getInfo(): string {
    const info = `
Name: ${this.name}
Email: ${this.email}
Age: ${this.age}
Marks: ${this.marks}
        `;
    return info;
  }
}

// --------------------------------------------------
// Junayed-এর Student Object তৈরি করা হচ্ছে
// --------------------------------------------------

const junayed = new Student(
  "Junayed Hasan",
  "junayedhasan302@gmail.com",
  22,
  100,
);

// Junayed নিজের information দেখাচ্ছে
console.log(junayed.getInfo());

/*
    STORY CONTINUE:

    Class শেষ হওয়ার পর Junayed একটা Tea Shop-এ গেল।

    দোকানের নাম:
    "Junayed's Tea Shop"

    দোকানে যা বিক্রি হবে,
    সেগুলোর name এবং price soldItems array-তে রাখা হবে।
*/

class TeaShop {
  // দোকানের নাম
  title: string;

  // দোকানে বিক্রি হওয়া সব item এখানে রাখা হবে
  soldItems: { name: string; price: number }[] = [];

  // Constructor:
  // নতুন Tea Shop তৈরি করার সময় দোকানের নাম নেওয়া হবে
  constructor(title: string) {
    this.title = title;
  }

  // Method:
  // কোনো item বিক্রি হলে সেটি soldItems-এর মধ্যে যোগ হবে
  buy(name: string, price: number): void {
    this.soldItems.push({
      name,
      price,
    });
  }

  // Method:
  // দোকান এখন পর্যন্ত মোট কত টাকার item বিক্রি করেছে
  // সেটা হিসাব করবে
  totalSold(): number {
    const total = this.soldItems.reduce((totalMoney, item) => {
      return totalMoney + item.price;
    }, 0);

    return total;
  }
}

// --------------------------------------------------
// Tea Shop Object তৈরি করা হচ্ছে
// --------------------------------------------------

const shop1 = new TeaShop("Junayed's Tea Shop");

// Junayed দোকান থেকে Tea কিনল
shop1.buy("Tea", 10);

// তারপর Cake কিনল
shop1.buy("Cake", 15);

// দোকান এখন পর্যন্ত মোট কত টাকা বিক্রি করেছে?
console.log("Total Sold:", shop1.totalSold());
