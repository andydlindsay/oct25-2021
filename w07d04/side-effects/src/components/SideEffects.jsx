import {useState, useEffect, useRef} from 'react';

const SideEffects = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');

  const myRef = useRef();
  myRef.current = counter;

  const myVar = 2;

  useEffect(() => {
    console.log('document title updated');
    document.title = `the current count is ${counter}`;
  }, [myVar, counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the counter is at ${counter}`);
    }, 2000);

    const cleanup = () => {
      console.log('interval has been cleared');
      clearInterval(interval);
    };

    return cleanup;
  });

  useEffect(() => {
    setTimeout(() => {
      alert(`the value of counter is ${myRef.current}`)
    }, 3000);
  });

  return (
    <div>
      <h2>Side Effect Component</h2>
      <h2>Current counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div>
        <label>Enter username:</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <h2>Current username: {username}</h2>
      </div>
    </div>
  )
};

// SideEffects();

export default SideEffects;
