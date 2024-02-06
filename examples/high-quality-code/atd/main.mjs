import { FuelTank } from "./fuel-tank.mjs";
import { Stack } from "./stack.mjs";

const fuelTank = new FuelTank(55);
console.log(JSON.stringify(fuelTank));
// {"volume":55,"capacity":0,"status":"Empty"}

fuelTank.fill();
console.log(JSON.stringify(fuelTank));
// {"volume":55,"capacity":55,"status":"Full"}

fuelTank.drain();
console.log(JSON.stringify(fuelTank));
// {"volume":55,"capacity":0,"status":"Empty"}

const stack = new Stack();

stack.push(new FuelTank(10));
stack.push(new FuelTank(20));

const topItem = stack.top();

console.log({ "stack size": stack.size, "top item": JSON.stringify(topItem) });
// {
//   'stack size': 2,
//   'top item': '{"volume":20,"capacity":0,"status":"Empty"}'
// }

const gettedTopItem = stack.pop();

console.log({
  "stack size": stack.size,
  "top item": JSON.stringify(stack.top()),
  item: JSON.stringify(gettedTopItem),
});
// {
//   'stack size': 1,
//   'top item': '{"volume":10,"capacity":0,"status":"Empty"}',
//   item: '{"volume":20,"capacity":0,"status":"Empty"}'
// }