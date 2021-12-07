import {useState} from 'react';
import Child from './Child';
// let count = 0;

const Counter = () => {
  // const something = useState(0);
  // const count = something[0];
  // const setCount = something[1];

  const [count, setCount] = useState(0);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState();

  // const clickHandler = () => {
  //   // alert('hello world');
  //   // count += 1;
  //   setCount(count + 1);
  //   console.log('clickHandler called');
  // };

  return (
    <div>
      <h2>This is the counter component</h2>
      {/* <h2>Current count: {count}</h2>
      <button onClick={clickHandler}>Increment!</button> */}
      <Child count={count} setCount={setCount}/>
    </div>
  );
};

// const mouseoverHandler = () => {};
// $('.btn').on('mouseover', mouseoverHandler);
// $('.btn').mousemove(() => {})
// document.addEventListener('click', () => {});

export default Counter;
