interface IBook {
  numPages: number;
  owner: string;
  transferOwner: (newOwner: string, newNumPages: number) => boolean;
}

const myBook: IBook = {
  numPages: 100,
  owner: 'Alice',
  transferOwner: (newOwner, newNumPages) => {
    return true;
  }
};

const higherOrderFunction = (cb: (msg: string) => number): void => {
  const returnVal = cb('hello world');
};