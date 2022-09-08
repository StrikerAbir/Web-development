// strongly type language (c, c++ need to declear data types)

// int a = 6
// sting b = 'sdfsf'
// bool c = ture;
// int[] number = [12, 34, 67, 87, 66]
// object student={name: 'Student'}

// dynamic type language (like js no need to declare data types )

//primitive type. single value
var num = 0;
const b = 'dsfsdf'
const c = true;

// primitive type a emn hole js a q er value update korle p er value te effect porena. cz value gulo alada vabe memory space a rakhe.
let p = 5;
let q = p; 
console.log(p, q);
q = 9;
console.log(p, q); 

//non primitive type. multi value
let array = [12, 34, 67, 87, 66]
let student = { name: 'Student' }

//non primitive type a y er man just full jodi emne change kore tahole x er kono change hoi na. ota new value memory space k assign kore.
let x= {job: 'Student'} 
let y = x; // eke bole reassign
console.log(x, y);
y = { job: 'developer' } // etao reassign cz full data change hosse.
console.log(x, y);

// kintu object er vitore job er value change kori tahole new value oi ager memory space ei update kore dei tai x1 and y1 2 tai change hoa jai. kintu change koresi y1.
let x1 = { job: 'Student' }
let y1 = x1;      // ete reassign hoi
console.log(x1, y1);
y1.job = 'bekar';   // ete reassign hoi na. ager value e change hoi jeta same memory space a thake.
console.log(x,y);