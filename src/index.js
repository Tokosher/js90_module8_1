// git add . & git commit -m "Initial commit"
// Можна замінити на git commit -am "Initial commit"
// import { add as addFunction, minus as minusFunction } from './utils.js'
// import divideFunction from './utils.js';
import * as allExports from './utils.js'

const { minus, default: divide } = allExports;
minus(10, 5)
divide(10, 5)

// addFunction(10, 15);
// minusFunction(25, 15);
// divideFunction(25, 5);

import { User, printName, printAge } from './utils.js';

const user1 = new User('Mike', 39);
const user2 = new User('Ann', 30);

printName(user2);
printAge(user1);