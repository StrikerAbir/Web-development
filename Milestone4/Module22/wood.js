function woodclc(chair,table,bed){
    const chairwood = 3;
    const tablewood = 10;
    const bedwood = 50;
    const totalchair = chair * chairwood;
    const totaltable = table * tablewood;
    const totalbed = bed * bedwood;
    return (totalchair + totaltable + totalbed);
}
 console.log(woodclc(1,1,1));