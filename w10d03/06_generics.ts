// problem: interface that could hold many different types, we don't know what those types are when we define the interface

interface IContainer<T, B> {
  name: string;
  contents: T;
  moreStuff?: B;
}

const stringContainer: IContainer<string, string> = {
  name: 'string container',
  contents: 'hello world'
}

const numberContainer: IContainer<number, string> = {
  name: 'number container',
  contents: 42
}