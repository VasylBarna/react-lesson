import { Component } from 'react';
import React from 'react';
import { Fragment } from 'react';
import ProductList from 'components/ProductList';
import { products } from 'api/products.json';

class App extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
    return (
      <Fragment key="">
        <div className="App">
          <div style={{ padding: '30px 10px 10px' }}>
            <input
              style={{ width: '400px' }}
              value={search}
              onChange={this.handleChange}
              placeholder="Напишите товар, которий Ви ищете"
            ></input>
          </div>
          <ProductList
            priceColor="teal"
            products={filteredProducts}
            price={9.99}
          >
            <h2>Елитная подборка кофе!!!</h2>
          </ProductList>
        </div>
      </Fragment>
    );
  }
}

export default App;
