import { Component } from 'react';
import styles from './Counter.module.scss';

export class Counter extends Component {
  // state = {
  //   value: this.props.min || 0,
  // };
  handleMinusClick = () => {
    const { productId, updateBasket, value } = this.props;
    const newValue = value - 1;
    // if (newValue >= this.props.min || 0) {
    if (newValue >= 0) {
      updateBasket(productId, newValue);
      // this.setState({ value: newValue });
    }
  };
  handlePlusClick = () => {
    const { productId, updateBasket, value } = this.props;
    updateBasket(productId, value + 1);
    // this.setState({ value: this.state.value + 1 });
    // this.setState(prevState => ({ value: prevState.value + 1 }));
    // this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <button onClick={this.handleMinusClick}>-</button>
        <span className={styles.Value}>{value}</span>
        <button onClick={this.handlePlusClick}>+</button>
      </div>
    );
  }
}
