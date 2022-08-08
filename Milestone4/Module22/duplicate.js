const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function removeduplicates(a) {
    const newarray = [];
    for (let i = 0; i < a.length; i++) {
        if (newarray.includes(a[i])===false) {
            newarray.push(a[i]);
        }
    }
    return newarray;
}
console.log(removeduplicates(names));