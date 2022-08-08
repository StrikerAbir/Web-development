/* 
1. if ticket numbers is less than 100, per ticket price =100

2. if ticket numbers is more than 100,but less then 200, first 100 tickets will be price =100 rest of the tickets price= 90
first 100 price = 100
101-200 price = 90

3. if you buy more than 200 tickets
first 100 price = 100
101-200 price = 90
200+ price= 70

*/

function ticketprice(ticket) {
    const first100 = 100;
    const second100 = 90;
    const rest = 70;

    if (ticket<=100) {
        const price = first100 * ticket;
        return price;
    } else if (ticket <= 200) {
        const price = (first100 * 100) + (second100 * (Math.abs(ticket - 100)));
        return price;
    } else {
        const price = (first100 * 100) + (second100 * 100) + (rest * (Math.abs(ticket - 200)));
        return price;
    }
}
console.log(ticketprice(250));