/*
Problems:
- Excessive dissemination of information.
- If the 'access age' is also used as a literal in another part of the program, 
it will lead to changes in every line of code in the future. 
- You can also omit the change somewhere.
*/

const checkPermission = (userAge) => userAge > 21;

const userAge = 18;
const userAllowed = checkPermission(userAge);

console.log({ "is access allowed?": userAllowed });

// { 'is access allowed?': false }
