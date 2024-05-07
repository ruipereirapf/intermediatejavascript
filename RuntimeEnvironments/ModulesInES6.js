function changeText(domElement, newText) {
    domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// export the functions here

export { changeText, changeToFunkyColor };


//------------------------------------------------------------------------------


/* main.js */
import { changeText, changeToFunkyColor } from './module.js';

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

// call changeText here
changeText(header, 'random text');

setInterval(()=> {
  
  // call changeToFunkyColor() here
  changeToFunkyColor(header)

}, 200);