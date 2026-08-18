/**
 * STORY:
 *
 * Junayed একটি bKash account খুলেছে।
 *
 * তার account-এর মধ্যে আছে:
 *
 * phone   → সবাই দেখতে পারবে
 * balance → শুধু account-এর ভিতরের code access করতে পারবে
 * pin     → গোপন থাকবে
 * history → account এবং child class ব্যবহার করতে পারবে
 */


// Access Modifiers:
// public    → যেকোনো জায়গা থেকে access করা যায়
// private   → শুধু নিজের class-এর ভিতরে access করা যায়
// protected → নিজের class + child class থেকে access করা যায়

class BkashAccount {

    // PUBLIC
    // বাইরে থেকেও phone access করা যাবে
    public phone: string;


    // PRIVATE
    // বাইরে থেকে balance সরাসরি access করা যাবে না
    private balance: number;


    // PRIVATE
    // PIN সম্পূর্ণ গোপন থাকবে
    private pin: number;


    // PROTECTED
    // নিজের class এবং child class থেকে access করা যাবে
    protected history: any[] = [];


    // Constructor:
    // নতুন bKash account তৈরি করার সময়
    // phone, balance এবং pin নেওয়া হবে
    constructor(
        phone: string,
        balance: number,
        pin: number
    ) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }


    // Method:
    // PIN দিয়ে balance check করা হবে
    getBalance(pin: number) {

        // User যে PIN দিয়েছে
        // সেটা account-এর আসল PIN-এর সাথে মিলানো হচ্ছে
        if (this.pin === pin) {

            // PIN সঠিক হলে balance দেখানো হবে
            return this.balance;
        }


        // PIN ভুল হলে balance দেখানো হবে না
        return "PIN is wrong!";
    }
}



// --------------------------------------------------
// Junayed-এর bKash Account তৈরি করা হচ্ছে
// --------------------------------------------------

const bkashAcc = new BkashAccount(
    "01234567", // phone
    5000,       // balance
    123         // PIN
);


// সঠিক PIN দিয়ে balance check করা হচ্ছে
console.log(bkashAcc.getBalance(123));


// Output:
// 5000



// --------------------------------------------------
// ভুল PIN দিলে কী হবে?
// --------------------------------------------------

console.log(bkashAcc.getBalance(999));


// Output:
// PIN is wrong!



// --------------------------------------------------
// PUBLIC property
// --------------------------------------------------

// phone public হওয়ায় বাইরে থেকে access করা যাবে
console.log(bkashAcc.phone);


// Output:
// 01234567



// --------------------------------------------------
// PRIVATE property
// --------------------------------------------------

// এগুলো সরাসরি access করা যাবে না:

// console.log(bkashAcc.balance); // Error
// console.log(bkashAcc.pin);     // Error



// কারণ balance এবং pin private।