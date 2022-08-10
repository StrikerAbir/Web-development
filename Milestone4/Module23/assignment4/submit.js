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

// Problem 4: publicBusFare

function publicBusFare(people) {
    const ticketPrice = 250;
    let bus, micro, peopleBus, peopleMicro;
     if (typeof people != 'number') {
        return 'Please enter number of people.';
     } else {
         if (people % 50 === 0) {
             return 0;
         } else {
             bus = parseInt(people / 50);
             peopleBus = 50 * bus;
         }
         if ((people - peopleBus) % 11 === 0) {
             return 0;
         } else {
             micro = parseInt((people - peopleBus) / 11);
             peopleMicro = 11 * micro;
         }
         const cost = (people - (peopleBus + peopleMicro)) * 250;
         return cost;
     }
}

// Problem 5: isBestFriend

function isBestFriend(a, b) {
    if (typeof a != 'object' || a === NaN
        || typeof b != 'object' || b === NaN) {
        return 'Please enter two objects.';
    } else if (Array.isArray(a) === true || Array.isArray(b) === true) {
        return 'Please enter two objects.';
    } else {
        if (a.name === b.friend && b.name === a.friend) {
            return true;
        } else {
            return false;
        }
    }
}