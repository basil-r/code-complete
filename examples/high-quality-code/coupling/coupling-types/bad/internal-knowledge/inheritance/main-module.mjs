/*
Main Module passes the Base Object Person to Module C. 
Module C (determineVacationBonus) knows 
that Main Module has actually passed it a Derived Object Employee, 
so it casts the type of the Base Object to that of the Derived Object 
and calls methods specific to the Derived Object.
 */

import { Employee } from "./b-module.mjs";
import { determineVacationBonus } from "./c-module.mjs";
import { Person } from "./a-module.mjs";

const person = new Employee(
  "John",
  "Doe",
  42,
  "Software Engineer",
  "2024-01-01"
);

const vacationBonus = determineVacationBonus(person);

console.log({ vacationBonus });

// { vacationBonus: 0 }

// ******** The second - throws error
// uncomment to check
// const person = new Person("John", "Doe", 42);

// const vacationBonus = determineVacationBonus(person);

// console.log({ vacationBonus });

// TypeError: person.getWorkingDays is not a function
