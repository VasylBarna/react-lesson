import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
// import { Button } from "./styled";
import { ProductCard } from 'components/ProductCard';

const ProductList = ({ children, updateBasket, basket, products }) => {
  return (
    <div>
      {children}
      <ul className={styles.ProductList}>
        {/* <ul className={styles.ProductList}> */}
        {products.map(product => (
          <li key={product.id}>
            <ProductCard
              updateBasket={updateBasket}
              basket={basket}
              product={product}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
  priceColor: PropTypes.string,
  updateBasket: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  children: 'Product List',
};

export default ProductList;
