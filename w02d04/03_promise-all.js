const generatePromise = require("./helpers/promise-generator");

const promiseOne = generatePromise('promiseOne', true, 1000); // products from db (5 sec)
const promiseTwo = generatePromise('promiseTwo'); // users from db (2 sec)

const promises = [promiseOne, promiseTwo];

Promise.race(promises)
  .then((firstPromiseToResolve) => {
    console.log('result of promise one:', arrOfData[0]);
    console.log('result of promise two:', arrOfData[1]);
  });
