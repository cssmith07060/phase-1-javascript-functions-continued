// Your code here
function demoChain(name) {
  const part1 = 'hi'
  return function() {
    const part2 = 'there'
    return function() { 
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    }
  }
}
demoChain("Dr. Stephen Strange")()() //=> HI there Dr. Stephen Strange


function saturdayFun(activity= "roller-skate") {
  return 'This Saturday, I want to ' + activity + "!"
}

function mondayWork(activity = "go to the office") {
  // return 'This Monday, I will ' + activity + "." 
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function innerFunction(adjective = "special") {
    return 'You are ' + flair + adjective + flair + "!"
  }
}

//Implement a function called wrapAdjective:
//It should return a function
//This "inner" function should:
//take a single parameter that should default to "special". 
//Name it however you wish.
//return a String of the form "You are ..." where ... 
//should be the adjective this function received wrapped in visual flair
//It should take as parameter a String that will be used to create visual flair
//You may call the parameter whatever you like, 
//but its default value should be "*"
//Call example: const encouragingPromptFunction = 
//wrapAdjective("!!!")

