const promiseGenerator = require('./helpers/promise-generator');

promiseGenerator('a new promise')
  .then((payload) => {
    console.log('promiseOne:', payload);
    return { awesome: 'object' };
    // return promiseGenerator({ awesome: 'object' });
  })
  .then((returnValFromPrevPromise) => {
    console.log('promiseTwo:', returnValFromPrevPromise);
  })

const myPromise = promiseGenerator('my description for this promise');
console.log(myPromise);

// const anotherPromise = myPromise
//   .then((theresNoMagicHere) => {
//     console.log('our promise has resolved');
//     console.log('here is the payload:', theresNoMagicHere);

//     return { message: 'does this work???'};
//     // return promiseGenerator('hello world');
//   })

// // const then = (cb) => {
// //   const returnVal = cb();
// //   if (typeof returnVal === 'Promise') {
// //     return returnVal;
// //   } else {
// //     return Promise<returnVal>;
// //   }
// // }

// console.log('anotherPromise', anotherPromise);

// anotherPromise
//   .then((whatDidItPassHere) => {
//     console.log('this is the payload for "anotherPromise":', whatDidItPassHere);
//   });

// conn.on('data', (data) => {console.log(data)})


// // const rounded = round(stdDev);
// // return rounded;

// // return round(stdDev);