/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea = function(radiusLength){
  return PI * Math.pow(radiusLength, 2);
}

module.exports.squareArea = function (sideLength){
  return Math.pow(sideLength, 2);
}

// //       OR       //

// /* shape-area.js */
// const PI = Math.PI;

// function circleArea(r) {
//   return PI * r * r;
// }
// function squareArea(side) {
//   return side * side;
// }

// module.exports.circleArea = circleArea;
// module.exports.squareArea = squareArea;