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