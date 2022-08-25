//syntactic suger
class Instructior {
    name;
    designation = 'web instructor'
    team = 'location'
    location;
    constructor(name, location) {
        //j j jinish add korte hobe seta k amader parameter nite hobe.
        // this. dia kon key te add hobe seta dia value dite hobe,
        this.name = name;
        this.location=location;
    }
    startSupportSession(time) {
        console.log(`start the sesseion at ${time}`)
    }
    createQuiz(module) {
        console.log(`create quiz for module ${module}`)
    }
}
//create object
const amir = new Instructior();
console.log(amir)
amir.startSupportSession('9.00')
amir.createQuiz(60);

//akhon name location add korte hole. constructor function use korte hobe classer moddhe.
const mahin = new Instructior('mahin', 'bogura');
console.log(mahin)
