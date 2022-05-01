//Array a special type of an object
let selectedColors = ['red', 'blue', 'white',  'brown'];
console.log(selectedColors)

//each element has an index that determines it's position
console.log(selectedColors[0]); //red
console.log(selectedColors[1]); //blue
console.log(selectedColors[2]); //white
console.log(selectedColors[3]); //brown
console.log(selectedColors[4]); //black //undefined
console.log(selectedColors[5]); //yellow //undefined

//the length of an array is dynamic and also the types of objects in an array 
selectedColors[4] = 'black';
selectedColors[5] = 'yellow'

//properties of an array 1.length property
console.log(selectedColors.length);
console.log(selectedColors.find);

