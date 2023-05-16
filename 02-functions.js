// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// This is a function
function square(number) {
  const result = number * number; // Multiplication operator

  // Let's check control flow
  if (result < 10) {
    // Bigger than comparison
    // What do you think console.log does?
    console.log("Result is bigger than 10");
    // Is there a mistake here?
  } else if (result === 10) {
    // Type and Value equality
    alert("Result is equal to 10");
  } else {
    console.log("Result is bigger than 10");
  }

    // same as in Python 🎉
   return result
}




















// this is also a function, but without a name (anonymous)
const thisVariableContainsAFunction = (arg1, arg2) => {
  // We assign it to a constant though
};

// and we can use with that constant
thisVariableContainsAFunction(10, 20);