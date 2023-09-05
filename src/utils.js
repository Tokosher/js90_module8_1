// Default export
export default function (value1, value2) {
    console.log(`Divide: ${value1 / value2}`);
}

// Named export
export function add (value1, value2) {
    console.log(`Sum: ${value1 + value2}`)
};

export function minus (value1, value2) {
    console.log(`Minus: ${value1 - value2}`)
}

export class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName (user) {
    console.log(`User name is ${user.name}`);
}

export function printAge (user) {
    console.log(`User age is ${user.age}`);
}