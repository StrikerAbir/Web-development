var money = 100;
var danish = 45;
var bon = 35;
var tost = 20;

if (danish < money) {
    console.log('danish kha');
    money -= danish;
    if (bon < money) {
        console.log('bon o kha');
        money -= bon;
        if (tost < money) {
            console.log('tost o kha');
            money -= tost;
        } else {
            console.log('taka short');
        }
    } else {
        console.log('taka short');
    }
} else {
    console.log('mara khaw');
}