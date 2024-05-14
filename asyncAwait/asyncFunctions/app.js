const shopForBeans = require('./library.js');

// Refactor the following function

// function getBeans() {
//     console.log(`1. Heading to the store to buy beans...`);
//     let value = shopForBeans();
//     console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
// }

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();