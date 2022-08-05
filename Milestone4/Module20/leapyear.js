function leapyear(year) {
    if (year % 400 === 0) {
        return 'leapyear';
    } else if (year % 100 === 0) {
        return 'not leapyear';
    } else if (year % 4 === 0) {
        return 'leapyear';
    } else {
        return 'not leapyear';
    }
}
console.log(leapyear(1900));