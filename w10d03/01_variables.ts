let username: string | number | boolean = 'Alice';

username = 'Bob';
username = 7;
username = false;

const onlyNums: number[] = [];
const myNumArr: (number | string | number[])[] = [];
// const myNumArr: number[] | string[] = [];
myNumArr.push([7]);
myNumArr.push('Bob');
// myNumArr.push(false);

const result = myNumArr.pop();
