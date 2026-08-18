const createStudent = (
  name: string,      // Student-এর নাম নেওয়া হচ্ছে
  age: number,       // Student-এর বয়স নেওয়া হচ্ছে
  email: string,     // Student-এর email নেওয়া হচ্ছে
  marks: number,     // Student-এর marks নেওয়া হচ্ছে
) => { // Blueprint / Factory Function

  const obj = {
    name,             // Input name object-এর property হিসেবে রাখা হচ্ছে
    age,              // Input age object-এর property হিসেবে রাখা হচ্ছে
    email,            // Input email object-এর property হিসেবে রাখা হচ্ছে
    marks,            // Input marks object-এর property হিসেবে রাখা হচ্ছে

    forgatePass() {   // Password reset করার method তৈরি করা হচ্ছে
      // 100 lines of code
    },
  };

  return obj;         // তৈরি করা object-টি return করা হচ্ছে
};


// Data Input / Object তৈরি করা হচ্ছে
const junayed = createStudent(
  "Junayed Hasan",    // name
  22,                 // age
  "your-email@example.com", // email
  100,                // marks
);


// Object-এর marks পরিবর্তন করা হচ্ছে
junayed.marks = 0;


// পুরো object-এর data console-এ দেখানো হচ্ছে
console.log(junayed);