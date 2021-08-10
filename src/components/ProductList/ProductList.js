import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
// import { Button } from "./styled";
import { ProductCard } from './components/ProductCard';

const ProductList = ({ children, price, products }) => {
  return (
    <div>
      {children}
      <h2>{price}$</h2>
      <ul className={styles.ProductList}>
        {/* <ul className={styles.ProductList}> */}
        {products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.string,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
  priceColor: PropTypes.string,
};

ProductList.defaultProps = {
  children: <h1>Product List</h1>,
};

export default ProductList;
