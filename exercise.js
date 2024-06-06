//same keys and values 

//function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */

  function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
  }

//computed property names

//   var favoriteNumber = 42;

//   var instructor = {
//     firstName: "Colt"
//   }
  
//   instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */ 

// let favoriteNumber = 42;

// const instructor = {
//     firstName: "Colt"
//     [favoriteNumber] = "That is my favorite!"
// }

//object methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

/* Write an ES2015 Version */

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//createAnimal function: Write a function which generates an animal object. 

const  createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

//OR (solution doesn't use arrow function)

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}