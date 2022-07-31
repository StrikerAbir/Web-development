var price = 630;
console.log(typeof price);
var price = '630';
console.log(typeof price);
var love = true;
console.log(typeof love);
var given;                  // undefined variable
console.log(typeof given);

// 0.1 and 0.2 addition er somoi javascript a akta jhamela ase. see output
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum)
// to fixed this do this
sum = sum.toFixed(2)    //toFixed use hoi 2 decimal porjonto output dite. but eta string hisabe return kore.
console.log(typeof sum,sum)
sum = parseFloat(sum);
console.log(typeof sum,sum)
