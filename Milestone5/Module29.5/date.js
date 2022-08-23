const today = new Date();
console.log(today)

// vul output dibe
const date1=new Date('1998-11-26')
const date2 = new Date('1998-11-23')
if (date1 > date2) {
    console.log('i am older')
} else {
    console.log('tishu is older')
}

// thik dibe
// ekhane get time dia mili second er hisab kore
if (date1.getTime() < date2.getTime()) {
    console.log('i am older')
} else {
    console.log('tishu is older')
}
