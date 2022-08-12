const hero = {
    name: 'sakib',
    id: 121,
    address: 'movie cenema', issingle: true,
    friends: ['apy', 'lyp', 'mapy', 'kaapy'], 
    movie: [{ name: 'no 1', year: 2015 }, { name: 'zero', year: 2000 }],
    act: function () {
        console.log('ore no1 sakib khan')
    },
    car: {
        brand: 'tesla', price: '49000000',
        model: 2030,
        menufracturer: {
            name: 'tesla', 
            ceo: 'elon mask', 
            country:'usa',
        }
    }
}
hero.act();