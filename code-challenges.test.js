// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeLanguage", () => {

  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(codeLanguage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeLanguage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeLanguage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// ● codeLanguage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//
//   ReferenceError: codeLanguage is not defined


// b) Create the function that makes the test pass.
// declare a function "codeLanguage"
// parameter:string
// use a for loop. not using higher order function because I don't want to return my outputs in array

// ^ that was the initial plan
// then i remembered that it would be easier to use a higher order function that way I didn't have find the value of the current index which I would have to do if I did for looop.
// b) Create the function that makes the test pass.
// declare a function "codeLanguage"
// parameter:string
// use the split to turn the string to an array
// turning it into an array i can manipulate with higher order function
// using conditional statements to check if the value = to a letter
// join it all the end so that I can have a string instead of an array

const codeLanguage = (string) => {
  let strToArr = string.split('')
  let a = 'a'
  let e = 'e'
  let i = 'i'
  let o = 'o'
  let u = 'u'
  let arrToStr = strToArr.map(value => {
    if (value === a || value === a.toUpperCase()){
        return 4
      }
      else if(value === e || value === e.toUpperCase()){
        return 3
      }
      else if(value === i || value === i.toUpperCase()){
        return 1
      }
      else if(value === o || value === o.toUpperCase()){
        return 0
      }
      else{return value}
  })
  return arrToStr.join("")
}

// for(i = 0; i < string.length; i++){
//   if (string[i] === 'a'){
//     return 4
//   }
//   else if(string[i] === 'e'){
//     return 3
//   }
//   else if(string[i] === 'i'){
//     return 1
//   }
//   else if(string[i] === 'o'){
//     return 0
//   }
//   else{string[i]}
// }


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("wordFinder", () => {

  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(wordFinder(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(wordFinder(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})




// b) Create the function that makes the test pass.
// declare the function wordFinder
// the parameter will take a letter and an array
// use .filter so that I can select a few things out of the array
// use includes to see whether that value included a certain letter.
// if it was true then it would output the whole value if not then it would pass that value and move to the next

const wordFinder = (array, letter) => {
  let upCase = letter.toUpperCase()
  let findingLetter = array.filter(value => {
    if(value.includes(letter) === true || value.includes(upCase) === true){
      return value
    }
  })
  return findingLetter
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {

  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})



// b) Create the function that makes the test pass.
// declare a function called fullHouse
// i am gong to sort it out so that it's in order
//for my two statements its going to look like this
//  xxxyy & yyxxx. to counter the five of a kind I will make sure that the first index does not equal to the last index



const fullHouse = (array) => {
  array.sort((a,b)=> a-b)
if(array[0] === array[1] && array[2] === array[4] && array[0] !== array[4]){
  return true
}
else if(array[0]=== array[2] && array[3] === array[4] && array[0] !== array[4]){
  return true
}
 else {return false}
}
