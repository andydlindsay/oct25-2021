"use strict";
// parameters and return (function name)
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
const output = sayHello('Alice', 42);
sayHello('Bob');
const returningPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('hello there');
    });
};
returningPromise().then((data) => { });
