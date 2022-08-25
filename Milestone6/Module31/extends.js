class TeamMember{
    name;
    location;
    constructor(name, location) {
        //j j jinish add korte hobe seta k amader parameter nite hobe.
        // this. dia kon key te add hobe seta dia value dite hobe,
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instructor extends TeamMember{ //extends dia teamMember er sathe er connection dewa holo.
    designation = 'web instructor'
    team = 'location'
    location;
    constructor(name, location) {
        super(name, location) //super dia ei name and location teamMember class a pathano houi.
    }
    startSupportSession(time) {
        console.log(`start the sesseion at ${time}`)
    }
    createQuiz(module) {
        console.log(`create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = 'developer'
    team = 'web team'
    tech;
    constructor(name, location,tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version ${version}`)
    }
}
class jobPlacement extends TeamMember{

    designation = 'Job placement comandos'
    team = 'job placement'
    region;
    constructor(name, location,region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please release the version ${version}`)
    }
}
const tisha = new Developer('tisha','gaibandha','html');
console.log(tisha)
tisha.provideFeedback();

const atik = new jobPlacement('atik', 'NY', 'USA');
console.log(atik);