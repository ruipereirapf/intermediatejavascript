/* function capAllElements(arr) {
    arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
    });
    
}

capAllElements("Incorrect argument");

*/

function capAllElements(arr) {
    try {
      arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
      });
    } catch (error) {
      console.log(error);
    }
}

capAllElements("Incorrect argument");
  
  