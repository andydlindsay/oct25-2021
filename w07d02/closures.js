// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

let counter = 0;

const increment = () => {
  counter += 1;
  console.log(counter);
};


increment();
increment();
counter += 10;
increment();
increment();
increment();
