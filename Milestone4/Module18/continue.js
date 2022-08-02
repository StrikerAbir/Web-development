var array = [12, 34, 67, 87, 66,30];
for (i = 0; i < array.length; i++) {
    var value = array[i];
    if (value > 60) {
        continue;
    }
    console.log(' array[', i, ']', value);
}