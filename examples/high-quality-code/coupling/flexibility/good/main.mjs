/*
Advantages:
This module makes it easy to call the determineVacationLength method.
It should not create a fake employee. 
And all it needs to know about the determineVacationLength method 
is that it accepts the employee's position and date of hire
*/

import { determineVacationLength } from "./vacation.mjs";

const position = "Software Engineer";
const hiringDay = "2024-01-01";

const vacationLength = determineVacationLength(position, hiringDay);

console.log({ vacationLength });

// { vacationLength: 14 }
