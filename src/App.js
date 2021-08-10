// import { Component } from 'react';
import { Fragment } from 'react';
import { ProductList } from './components/ProductList';
import { products } from './api/products.json';

function App() {
  return (
    <Fragment key="">
      <div className="App">
        <div style={{ padding: '30px 10px 10px' }}>
          <input placeholder="Напишите товар, которий Ви ищете"></input>
        </div>
        <ProductList priceColor="teal" products={products} price={9.99}>
          <h2>Елитная подборка кофе!!!</h2>
          <h3>Second children</h3>
        </ProductList>
        <ProductList priceColor="tomato" products={products} price={9.99}>
          <h2>Обичная подборка кофе!!!</h2>
          <h3>Second children</h3>
        </ProductList>
      </div>
      <h2>Second element</h2>
    </Fragment>
  );
}

export default App;
