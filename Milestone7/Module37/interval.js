console.log('first');
console.log('second');
let second = 0;
const intervalId=setInterval(() => {
    console.log(second++)
    if (second==10) {
        clearInterval(intervalId);
    }
}, 1000);
let bar= setTimeout(function () { console.log('third') }, 1000);
clearTimeout(bar)
