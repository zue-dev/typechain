// interface
interface HumanInterface {
	name: string;
	age: number;
	gender: string;
}

const personInfo = {
	name: 'zue',
	age: 27,
	gender: 'female'
};

const sayHiWithInterface = (person: HumanInterface): void => {
	console.log(
		`Hi ${person.name}, You are ${person.age} years and you are a ${person.gender}`
	);
};

sayHiWithInterface(personInfo);

//class
class HumanClass {
	public name: string;
	public age: number;
	public gender: string;

	constructor(name: string, age: number, gender: string) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

const zue = new HumanClass('choi juhye', 26, 'female');

const sayHiWithClass = (person: HumanClass): void => {
	console.log(
		`Hi ${person.name}, You are ${person.age} years and you are a ${person.gender}`
	);
};

sayHiWithClass(zue);

export {};
