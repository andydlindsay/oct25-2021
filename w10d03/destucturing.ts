interface Dog {
  name: string;
  likesPets: boolean;
  hasFleas?: boolean;
}

const petDog = ({name}: Dog) => {
  console.log(`hello ${name}`);
  console.log('did this work?');
};
