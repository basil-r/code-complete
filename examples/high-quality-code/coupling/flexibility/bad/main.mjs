/*
Problems:
In order for the module to be able to access the determineVacationLength() module, 
it must know that the Employee class exists. 
It could fake an employee object using only two fields, 
but then it would have to know the inner workings of the determineVacationLength() method: 
it would need to be sure that the determineVacationLength() method uses only those two fields.
*/

import { Employee } from "./employee.mjs";
import { determineVacationLength } from "./vacation.mjs";

const position = "Software Engineer";
const hiringDay = "2024-01-01";

// fake (inferior) employee,
// since the method accepts an instance of the class Employee
const tmpEmployee = new Employee(null, position, hiringDay, null);
console.log({ "employee data": JSON.stringify(tmpEmployee) });

const vacationLength = determineVacationLength(tmpEmployee);

console.log({ vacationLength });

// {
//   'employee data': '{"name":null,"position":"Software Engineer","employmentDate":"2024-01-01T00:00:00.000Z","id":null}'
// }
// { vacationLength: 14 }
