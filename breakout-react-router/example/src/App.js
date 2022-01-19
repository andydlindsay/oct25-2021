import './App.css';

import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
// import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <h2>React Router</h2>

      <Router>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          {/* <Route path="/products/*" element={<Product />} /> */}
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
        
      </Router>
    </div>
  );
};

export default App;
