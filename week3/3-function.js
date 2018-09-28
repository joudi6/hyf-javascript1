//1.sum total function
alert('1. Sum total function exercise up coming');
let firstNumber = prompt('Please enter FIRST number');
let secondNumber = prompt('Please enter SECOND number');
let thirdNumber = prompt('Please enter THIRD number');
function sumNumbers(first, second, third) {
  let total = first + second + third;
  return (total);

}
alert('the sum of your numbers = ' + sumNumbers(parseInt(firstNumber), parseInt(secondNumber), parseInt(thirdNumber)));
console.log('the sum of your numbers = ' + sumNumbers(parseInt(firstNumber), parseInt(secondNumber), parseInt(thirdNumber)));

//2.String concatenating function (car color)
alert('2. Car color function exercise up coming');
let myFavoriteColor = prompt("what car color are you looking for?");
function colorCar(color) {

  return (myFavoriteColor);
}

alert('we found you a ' + colorCar(myFavoriteColor) + ' car');
console.log('we found you a ' + colorCar(myFavoriteColor) + ' car');

//3 object output using function

const table = {
  material: ' wooden ',
  color: ' brown ',
  height: ' 60 Cm ',
  price: ' 30 $'

}
function displayObject(myObject) {
  return (myObject);
}
console.log(displayObject('my Objects properties and values are:\n ' + Object.entries(table)));

//4. vehicle Type and color function (using prompts)
alert('4. Vehicle Type and color function exercise up coming');
let promptType = prompt("what vehicle type are you looking for? FOR A CAR ENTER (1), FOR A MOTORBIKE ENTER(2)");
let promptColor = prompt("what vehicle color are you looking for?");
function vehicleType4(type, color) {

  if (type == 1) { type = 'car'; }
  else { type = 'motorbike'; }

  let choice = color + " " + type;
  return (choice)

}
alert("check console for result");
console.log("your choice is a " + vehicleType4(promptType, promptColor));


//5 consol.log with condition 

console.log(3 === 3 ? 'Yes' : 'No');

//6 vehicle Type and color function in secondhand shop (using prompts)

function vehicleType6(type, color, age) {

  if (type == 1) { type = 'car'; }
  else { type = 'motorbike'; }
  if (age > 1) { age = age + ' years used'; }
  else { age = ' Brand New'; }
  let choice = color + " " + age + " " + type;
  return (choice)
}

console.log("We found you a " + vehicleType6(1, "blue", 5));
//7 list vehicles
let vehicles = {
  vehicleTypeList: ["car", "motorbike", "caravan", "bike", "bus", "microbus", "tuktuk", "scooter"],
}
//8 get an element from array

console.log(vehicles.vehicleTypeList[2]);

//9. arrays of vehicles inside object
let vehicles2 = {
  vehicleTypeList: ["car", "motorbike", "caravan", "bike", "bus", "microbus", "tuktuk", "scooter"],

}
function vehicleType9(color, age, type) {
  if (age > 1) { age = age + ' years used'; }
  else { age = ' Brand New'; }
  let choice = color + " " + age + " " + type;
  return (choice)
}

console.log(vehicleType9("a " + "green", 1, vehicles2.vehicleTypeList[3]));

//10 Use the list of vehicles to write an advertisement.So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
let vehicleTypeList = ["car", "motorbike", "caravan", "bike", "bus", "metro", "tuktuk"];

let advertisement = "Amazing Joe's Garage, we service: ";
for (let i = 0; i < vehicleTypeList.length - 1; i++) {

  advertisement += vehicleTypeList[i] + "s, ";
}
let finalAdvertisement = advertisement + "and " + vehicleTypeList.slice(-1)[0] + "s.";
console.log(finalAdvertisement);

//11 add vehicle to list 

vehicleTypeList.push("cart");
console.log(vehicleTypeList);
// copied code without changing

advertisement = "Amazing Joe's Garage, we service: ";
for (let i = 0; i < vehicleTypeList.length - 1; i++) {

  advertisement += vehicleTypeList[i] + "s, ";
}
finalAdvertisement = advertisement + "and " + vehicleTypeList.slice(-1)[0] + "s.";
console.log(finalAdvertisement);

//12 Create an empty object.

const myObject = {};

console.log(myObject);

//13 object of teachers
const teachers = {
  teachersNames: ['Hasan', 'Ivana', 'Jim']
};
console.log(teachers);

//14 
teachers['Languages'] = ['html', 'css', 'javascript'];

console.log((teachers));

//15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log('i think the answers will be true ,false,false,false.');

console.log('x==y is' + x == y ? 'equal' : 'not equal');
console.log('x===y is' + x == y ? 'equal' : 'not equal');
console.log('z==y is' + x == y ? 'equal' : 'not equal');
console.log('z==x is' + x == y ? 'equal' : 'not equal');


//16 
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o3);

o2.additional = 'added';

console.log(o3, 'changed');

o1.additional2 = 'also added';
console.log(o3, 'not changed');
o2 = o3;
console.log(o2);

//17

let bar = 42;
console.log(typeof typeof bar);

