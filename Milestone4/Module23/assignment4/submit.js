// Problem:1  radianToDegree

function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return 'Please enter a number';
    } else {
        const result = radian * (180 / Math.PI);
        return result.toFixed(2);
    }
}

// Problem:2  isJavaScriptFile

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

// Problem 3: oilPrice

function oilPrice(diesel, petrol, octen) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;
    if (typeof diesel != 'number' ||  diesel === NaN
        || typeof petrol != 'number' || petrol === NaN
        || typeof octen != 'number' || octen === NaN) {
        return 'Enter 3 numbers.';
    } else {
        const total = (diesel * dieselPrice) + (petrol * petrolPrice) + (octen * octenPrice);
        return total;
    }
}