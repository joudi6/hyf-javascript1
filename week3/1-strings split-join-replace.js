

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

console.log(myString.length);

//1st way to solve it
const my1NewString = myString.split(",").join(" ");
console.log(my1NewString);

//2nd way to solve it
const my2NewString = myString.replace(/,/g, " ");// g means global (all commas not only first one)
console.log(my2NewString);












