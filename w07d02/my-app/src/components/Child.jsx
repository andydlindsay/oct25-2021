const Child = (props) => {
  const clickHandler = () => {
    // alert('hello world');
    // count += 1;
    props.setCount(props.count + 1);
    console.log('clickHandler called');
  };

  return(
    <div>
      <h2>Child Component</h2>
      <h2>Current count: {props.count}</h2>
      <button onClick={clickHandler}>Increment!</button>
    </div>
  )
};

export default Child;
