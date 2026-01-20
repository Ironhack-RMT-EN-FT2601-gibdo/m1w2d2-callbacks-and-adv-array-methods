//* Callbacks

let myName = "Bob"

function sayHi(username) {
  console.log(`Hello ${username}`)
} // ref. ABCD

sayHi(myName)

function sayHiFormal(username) {
  console.log(`Good Evening Sir/Madam ${username}`)
}

function allowAdminRights() {
  console.log("Since you are an admin, you can access this part")
}

function allowVIPRights() {
  console.log("Since you are VIP, you can access this other part")
}

function greetUser(hiCallback, username, rightsCallback) {
  // let callback = sayHi ref. ABCD
  hiCallback(username)
  console.log("Welcome to the website!")
  rightsCallback()
}

greetUser( sayHi, "Patrick", allowVIPRights ) // passed as argument: ref. ABCD
greetUser( sayHiFormal, "Bob", allowAdminRights )


// Methods that require callbacks


//* forEach()

let numbers = [4, 8, 15, 16, 23, 42]

// function something(eachElement) {
//   console.log("Potato", eachElement)
// }

// numbers.forEach( something )

// how the forEach method is created internally
// array.forEach = function( callback ) {

//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i)
//   }

// }

numbers.forEach( (eachNumber, index) => {
  // console.log(eachNumber, index)
  if (eachNumber % 2 === 0) {
    console.log(`the number ${eachNumber} is even`)
  }

  if (eachNumber === 42) {
    console.log("found the answer the life, the universe and everything else")
  }
} )



//* map()

// [4, 8, 15, 16, 23, 42]

const newArr = numbers.map((number, index) => {
  console.log("potato from the map")

  // MANDATORY to have a return and return a a value in each iteration
  if (index === numbers.length - 1) {
    let eachNewValue = number * 200
    return eachNewValue
  } else {
    let eachNewValue = number * 100
    return eachNewValue
  }

})

console.log(newArr) // ALWAYS the same amount of element as the original

// We can do the same goal of a map with a for, but we prefer to do a map.
// let newArr2 = []

// for (let i = 0; i < numbers.length; i++) {
//   let newValue = numbers[i] * 100
//   newArr2.push(newValue)
// }

// console.log(newArr2)



//* filter()


const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

const filteredCars = cars.filter((car) => {
  console.log(car)
  // only get the cars from 2010

  //* MANDATORY always return a boolean 
  // true => add the element
  // false => don't add the element

  if (car.year === 2010) {
    return true // add it
  } else {
    return false // don't add it
  }

  //* shorter syntax
  // return car.year === 2010
  
  // THE ELEMENTS being returned will always be the same as the original

  //* example multiple conditions
  // return car.year === 2010 && car.weight < 1
})

console.log(filteredCars)