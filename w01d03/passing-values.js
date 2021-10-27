// const addTwo = function(num) {
//   num = num + 2;
//   console.log('inside the func', num);
// }

// let myNumber = 4;
// addTwo(myNumber);
// console.log('outside the function', myNumber);

const changeFirstName = function(obj) {
  obj = {}
  obj.firstName = 'Bob';
  obj.age = 42;
  obj.newKey = 'new value';
  console.log('obj inside function', obj);
}

const ourObj = {
  firstName: 'Alice',
  age: 25
}

const ourObj2 = ourObj;
ourObj2.age = 50;

changeFirstName(ourObj);
console.log('outside the function', ourObj);
