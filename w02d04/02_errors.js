const generatePromise = require('./helpers/promise-generator');
const promiseGenerator = require('./helpers/promise-generator');

const promiseThatRejects = promiseGenerator('promiseOne', true);
console.log(promiseThatRejects);

promiseThatRejects
  .then((data) => {
    console.log('happy path:', data);
  })
  .then((data) => {
    console.log('happy path:', data);
  })
  .catch((err) => {
    console.log('something bad happened:', err);
  })
  .then((fromPreviousCatch) => {

  });

// setTimeout(() => {
//   console.log(promiseThatRejects);
// }, 4000);


// funcThatTakesACallback((err, data) => {
//   if (err) {
//     // handle error
//   }
//   funcThatTakesACallback((err, data) => {
//     if (err) {
//       // handle error
//     }
//     // move on
//   });
// });
