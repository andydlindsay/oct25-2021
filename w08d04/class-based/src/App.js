import './App.css';
import ClassBased from './components/ClassBased';
import {useState} from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <h2>Fun with Class-Based Components</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      { isVisible && <ClassBased someProp="this is an awesome prop">
        <h2>This is a child</h2>
      </ClassBased> }
    </div>
  );
};

export default App;
