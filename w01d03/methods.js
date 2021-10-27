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

let myVar = null;

// const studentTwo = studentOne;
studentOne = null;

console.log(studentTwo);
studentTwo.addNewFriend('Bob');
studentTwo.addNewFriend('Carol');
