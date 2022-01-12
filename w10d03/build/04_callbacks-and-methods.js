"use strict";
const myBook = {
    numPages: 100,
    owner: 'Alice',
    transferOwner: (newOwner, newNumPages) => {
        return true;
    }
};
const higherOrderFunction = (cb) => {
    const returnVal = cb('hello world');
};
