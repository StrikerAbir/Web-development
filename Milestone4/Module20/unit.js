// inch to feet
function unit(inch) {
    const feet = inch / 12;
    return feet;
}
const convertinch = unit(84);
console.log(convertinch);
// mile to km
function distance(miles) {
    const km = miles * 1.60934
    return km;
}
const convertdistance = distance(2);
console.log(convertdistance);