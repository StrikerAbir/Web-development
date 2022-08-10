// **** Problem:1  radianToDegree

/*ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।*/

function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return 'Please enter a number';
    } else {
        const result = radian * (180 / Math.PI);
        return result.toFixed(2);
    }
}
// console.log(radianToDegree(10));
// console.log(radianToDegree(25));
// console.log(radianToDegree('199'));

// **** Problem:2  isJavaScriptFile

/*ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।*/

function isJavaScriptFile(file) {
    if (typeof file != 'string') {
        return 'Please enter a file name';
    } else {
        const a = file.trim();
        if (a.slice(a.length - 3, a.length) === '.js') {
            return true;
        } else {
            return false;
        }
    }
}
// console.log(isJavaScriptFile(32));
// console.log(isJavaScriptFile('app.js'));
// console.log(isJavaScriptFile('js.png'));
// console.log(isJavaScriptFile('image.js.png'));
// console.log(isJavaScriptFile('image.png.js'));

// **** Problem 3: oilPrice

/*ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

ভিডিও ভালো করে দেখবে। 

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

function oilPrice(diesel, petrol, octen) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;
    if (typeof diesel != 'number' ||  diesel === NaN
        || typeof petrol != 'number' || petrol === NaN
        || typeof octen != 'number' || octen === NaN) {
        return 'Enter 3 numbers.';
    } else {
        const total = (diesel * dieselPrice) + (petrol * petrolPrice) + (octen * octenPrice);
        return total;
    }
}
// console.log(oilPrice(1, 1));
// console.log(oilPrice(1, 1, 1));
// console.log(oilPrice(30, 20, 10));
// console.log(oilPrice(1, 0, 2));
// console.log(oilPrice(0, 2, 3));

// Problem 4: publicBusFare

/*একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

উদাহরণ১ঃ
 যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ
 যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।*/

function publicBusFare(people) {
    const ticketPrice = 250;
    let bus, micro, peopleBus, peopleMicro;
     if (typeof people != 'number') {
        return 'Please enter number of people.';
     } else {
         if (people % 50 === 0) {
             return 0;
         } else {
             bus = parseInt(people / 50);
             peopleBus = 50 * bus;
         }
         if ((people - peopleBus) % 11 === 0) {
             return 0;
         } else {
             micro = parseInt((people - peopleBus) / 11);
             peopleMicro = 11 * micro;
         }
         const cost = (people - (peopleBus + peopleMicro)) * 250;
         return cost;
     }
 }
// console.log(publicBusFare('dfs'));
// console.log(publicBusFare(50));
// console.log(publicBusFare(55));
// console.log(publicBusFare(112));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));

// Problem 5: isBestFriend

/*তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।*/

function isBestFriend(a, b) {
    if (typeof a != 'object' || a === NaN
        || typeof b != 'object' || b === NaN) {
        return 'Please enter two objects.';
    } else if (Array.isArray(a) === true || Array.isArray(b) === true) {
        return 'Please enter two objects.';
    } else {
        if (a.name === b.friend && b.name === a.friend) {
            return true;
        } else {
            return false;
        }
    }
}

const obj1 = { name: 'ban', friend: 'ane' };
const obj2 = { name: 'ane', friend: 'bane' };
const obj3 = { name: 'bane', friend: 'ane' };
const obj4 = { name: 'ane', friend: 'bane' };
const obj5 = [ 'ane', 'bane' ];
console.log(isBestFriend(obj1, obj2));
console.log(isBestFriend(obj3, obj4));
console.log(isBestFriend(obj3));
console.log(isBestFriend(obj3, obj5));