import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { fetchDeliveryTeam } from './api';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export class DeliveryList extends Component {
  state = {
    deliveryTeam: [],
    error: null,
    loading: false,
  };

  loadDeliveryTeam = async () => {
    //     this.setState({ loading: true });
    //     fetch(API_URL)
    //       .then(response => response.json())
    //       .then(deliveryTeam => this.setState({ deliveryTeam }))
    //       .catch(error => this.setState({ error: error.message }))
    //       .finally(() => this.setState({ loading: false }));

    this.setState({ loading: true });
    try {
      const response = await fetch(API_URL);
      const deliveryTeam = await response.json();
      //       const deliveryTeam = await fetchDeliveryTeam();
      this.setState({ deliveryTeam });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ loading: false });
  };

  //   componentDidMount() {
  //     this.loadDeliveryTeam();
  //   }

  render() {
    console.log('render');
    const { deliveryTeam, error, loading } = this.state;
    return (
      <div>
        <h3>Our delivery team</h3>
        {deliveryTeam.length === 0 && !loading && (
          <button onClick={this.loadDeliveryTeam}>Show delivery team</button>
        )}
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h2>Ooops..{error}</h2>
        ) : (
          <ul>
            {deliveryTeam.map(deliveryGuy => (
              <li key={deliveryGuy.id}>{deliveryGuy.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
