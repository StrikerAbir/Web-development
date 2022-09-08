const first = 1;
const second = true;

// double equal (type conversion kore back a)
if (first == second) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}

//triple equal
if (first === second) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}


/// for non primitive values
// non primitive er jonne value na reference check kore. reference same hole equal na hole na.
/*
const ak = {};
const b = {};
//op dibe not equal.
 */
const ak = {};
const b = ak;

// double equal (type conversion kore back a)
if (ak == b) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}

//triple equal
if (ak === b) {
    console.log('values are equal');
} else {
    console.log('values are not equal');
}

