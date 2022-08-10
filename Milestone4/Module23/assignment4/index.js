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