import { Component } from 'react';
import { Fragment } from 'react';
import ProductList from 'components/ProductList';
import { products } from 'api/products.json';
// import { AuthForm } from 'components/AuthForm';
// import { Lifecycle } from './components/Lifecycle';
import { DeliveryList } from './components/DeliveryList';

const BASKET = {};
products.forEach(product => {
  BASKET[product.id] = 0;
});

class App extends Component {
  state = {
    search: '',
    BASKET,
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  updateBasket = (productId, newValue) => {
    const { BASKET } = this.state;
    this.setState({ BASKET: { ...BASKET, [productId]: newValue } });
  };

  render() {
    const { search, BASKET } = this.state;
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    const basketMessages = products
      .filter(product => BASKET[product.id])
      .map(product => {
        return `${product.name}: ${BASKET[product.id]} шт.`;
      });

    return (
      <Fragment key="">
        {/* <Lifecycle outerValue={21} /> */}
        <DeliveryList />
        {/* <AuthForm /> */}
        <hr />
        <div className="App">
          <div style={{ padding: '30px 10px 10px' }}>
            <input
              style={{ width: '400px' }}
              value={search}
              onChange={this.handleChange}
              placeholder="Напишите товар, которий Ви ищете"
            ></input>
          </div>
          {basketMessages.length > 0 && (
            <h3>Ваша корзин: {basketMessages.join(', ')}</h3>
          )}

          <ProductList
            BASKET={BASKET}
            priceColor="teal"
            updateBasket={this.updateBasket}
            products={filteredProducts}
          >
            <h2>Елитная подборка</h2>
          </ProductList>
        </div>
      </Fragment>
    );
  }
}

export default App;
