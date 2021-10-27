let studentOne = {
  name: 'Alice',
  age: 25,
  friends: [],
  bff: {},
  sayHello: function() {},
  addNewFriend: function(newFriend) {
    this.friends.push(newFriend);
    console.log(this.friends);
  }
};

for (const key in studentOne) {
  console.log(key, studentOne[key]);
  // studentOne.key
}

// const arr = [1,2,3];
// for (const index in arr) {
//   console.log(arr[index]);
// }
 

// const keys = Object.keys(studentOne);
// console.log(keys);
