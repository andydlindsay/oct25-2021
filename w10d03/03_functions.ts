// parameters and return (function name)

const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

const output = sayHello('Alice', 42);
sayHello('Bob');

const returningPromise = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('hello there');
  });
};

returningPromise().then((data) => {});
