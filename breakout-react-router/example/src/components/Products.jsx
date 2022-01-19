import {Routes, Route, Link} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>All the products in the database</h2>

      <nav>
        <Link to="/products/1">Product #1</Link>
        <Link to="/products/2">Product #2</Link>
        <Link to="/products/3">Product #3</Link>
        <Link to="/products/4">Product #4</Link>
      </nav>

      <Routes>
        <Route path="/:id" element={<Product />} />
        <Route path="/" element={<h2>Please choose from the list above</h2>} />
      </Routes>
    </div>
  );
};

export default Products;
