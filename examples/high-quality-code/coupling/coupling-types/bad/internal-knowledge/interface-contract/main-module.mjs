/*
The Module A (Calendar) interface states that the method initialize() 
must be called before the getWeekDay() method. 
Main module knows that getWeekDay() somehow calls the initialize() method, 
so it simply creates an instance of Module A (calendar) and 
calls Calendar.getWeekDay() without first calling the Calendar.initialise() method.
*/

import { Calendar } from "./a-module.mjs";

const calendar = new Calendar();
const weekDay = calendar.getWeekDay();

console.log({ weekDay });
// { weekDay: 'Sat' }
