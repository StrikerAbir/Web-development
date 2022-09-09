function greetings(func,name) {
    func(name);
}

function greetingHandler(name) {
    console.log('good morning ',name);
}

function greetingEvening(name) {
    console.log('good evening' ,name);
}
const name = 'bane';
// greetings(name);
greetings(greetingHandler, name);
greetings(greetingEvening, name);