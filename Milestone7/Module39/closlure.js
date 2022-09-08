//Kono akta function er vitor theke r akta function return korle, j function k return korsi tar bairer function er joto gula internal value ase se gula k access korte pare.
// Outer function er onek gula copy banaile copy gular alada kore nijesso instance create hoi.And tader nijosso alada copy of variable thakbe.

function kitchen() {
    let rost = 0;
    return function () {
        rost++; //rost ta scope er baire bt access korte parse.
        return rost;
    }
}

const firstServer = kitchen();
const secondServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(secondServer());
console.log(secondServer());
console.log(firstServer());
console.log(firstServer());
console.log(secondServer());
console.log(secondServer());
console.log(firstServer());