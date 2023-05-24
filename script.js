// complete this js code
function Person(name, age) {
	let greet = () => {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}

function Employee extends Person(name, age, jobTitle) {
    super(name,age);
    this.jobTitle = jobTitle;
    let jobGreet = () => {
        
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;