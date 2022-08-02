// break
for (var i = 0; i <= 20; i++){
    
    if (i > 10) {
        break;
    }
    console.log(i);
}

var num = 0;
while (num < 10) {
    console.log(num);
    num++;
    if (num>5) {
        break;
    }
    console.log(num);
    num++;
}

var array = [12, 34, 67, 87, 66];
for (i = 0; i < array.length; i++) {
    var value = array[i];
    
    if (value == 87) {
        break;
    }
    console.log(' array[', i, ']', value);
}