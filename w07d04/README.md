# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
1. Have to be called top-level (cannot be called conditionally)
2. Have to be called inside of a React function (component or custom hook)
3. Every hook has to start with `use`

Dan Abramov - overreacted.io

### Pure Function
* has no side effects
* nothing from the outside (either in or out)
* it will return the same value given the same input
* no mutations in global scope


```js
let additive = 2;

const addTwo = (num) => {
  const result = num + 2;
  additive++;
  return result;
};
```








