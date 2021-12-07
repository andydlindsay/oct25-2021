import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import React from 'react';

const App = () => {
  const myString = 'hello';

  const myArr = [
    <div key="abc">One div</div>,
    <h2 key="def">Another element</h2>
  ];

  return (
    <div className="App">
      <Header className="header" message="About us" username="Bob" />
      {/* Header({ username: 'Alice' }) */}
      {/* <Header key="hello" username="Carol" /> */}

      <Header children={myArr} username="Carol">
        <h4>Am I going to render?</h4>
      </Header>

      {/* <Header>
        <h2>This is child one</h2>
        <h2>This is child two</h2>
      </Header>

      <Header /> */}
      <Counter />

      { myArr }
    </div>
  );
}

// React.createComponent('div').addClass

export default App;
