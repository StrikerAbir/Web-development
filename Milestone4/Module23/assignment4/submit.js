// Problem:1  radianToDegree

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Please enter a number';
    } else {
        const result = radian * (180 / Math.PI);
        return result.toFixed(2);
    }
}

