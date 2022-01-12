class Ramen {}

interface IRamen {
  id?: number,
  spiciness: number,
  price: number,
  thicknessOfNoodles: string,
  broth: boolean
}

const ramen: IRamen = {
  spiciness: 7,
  price: 1000,
  thicknessOfNoodles: 'broad',
  broth: false,
  // moreStuff: 'hello world'
};

const ramenArr: IRamen[] = [];
ramenArr.push(ramen);
// ramenArr.push('');

