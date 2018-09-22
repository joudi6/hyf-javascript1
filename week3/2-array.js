let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);

//1
favoriteAnimals.push('turtle');
//2
console.log(favoriteAnimals);
//3 
favoriteAnimals.splice(1, 0, 'meerkat');
//4
console.log("I think my new array will have the values: " + favoriteAnimals);
//5
console.log(favoriteAnimals);
//6
console.log("The array have the length of: " + favoriteAnimals.length);
//7 
favoriteAnimals.splice(3, 1);
//8
console.log(favoriteAnimals);
//9
const meerkatIndex = favoriteAnimals.indexOf('meerkat');
favoriteAnimals.splice(meerkatIndex, 1);
console.log("The item you are looking for is at index: " + meerkatIndex);
//final array
console.log(favoriteAnimals);