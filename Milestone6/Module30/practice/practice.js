// 1
const multi = (a, b, c) => a * b * c;
console.log(multi(1, 2, 3))

// 2
const line = `i am a web developer.
I love to code.
I love to eat biriani.`
console.log(line)

// 3
const add = (a, b = 0) => a + b;
console.log(add(3)) 

//4
const friend = a => {
    const array = [];
    for (const b of a) {
        if (b.length % 2 == 0) {
            array.push(b);
        }
    }
    return array;
}
const friends = ['bane', 'ane', 'popo'];
const newArray = friend(friends);
console.log(newArray);

// 5
const avg = a => {
    let sum=0;
    for (const b of a) {
        sum += Math.pow(b, 2);
    }
    return (sum / a.length);
}
const num = [2, 3, 4];
console.log(avg(num))

// 6
const max = (a, b) => {
    // const array = a.concat(b);
    const array = [...a, ...b]; //another way
    console.log(array);
    return Math.max(...array);
}
const a1 = [2, 3, 6];
const a2 = [1, 9, 8];
console.log(max(a1, a2));