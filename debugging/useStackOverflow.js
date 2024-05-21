/*

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  
}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

*/

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
    const subString = 'cake';
  
    if(string.includes(subString)){
      return true;
    } else {
      return false;
    }
  }
  
  // Should return true
  console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));
  
  // Should return false
  console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));