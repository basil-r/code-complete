import { checkPermission } from "./access.mjs";

/*
Advantages:
The information is hidden in one place - by means of a constant, 
to change the value of which you will have to change only one line of code.
*/

const userAge = 18;
const userAllowed = checkPermission(userAge);

console.log({ "is access allowed?": userAllowed });

// { 'is access allowed?': false }
