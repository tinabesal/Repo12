// Only change code below this line

var myPetsArray = [
{
    animalType: "Dog", 
    name: "Pujdo",
},
{    
    animalType: "Cat",
    name: "Maca", 
},
{    
    animalType: "Bird",
    name: "Tweety", 
}
]

function myPetsFunction(pets) {
return myPetsArray[1]
}
  
  // Only change code above this line
  
  console.log(myPetsFunction());   // Change this line
  module.exports = myPetsFunction;
  module.exports.myPets = myPetsArray;