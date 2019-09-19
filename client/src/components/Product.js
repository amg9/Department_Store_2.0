import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios';

class Product extends React.Component {
  state = { product: {}, }

  componentDidMount() {
    const { department_id, id } = this.props.match.params;
    axios.get(`/api/departments/${department_id}/products/${id}`)
      .then( res => {
        this.setState({ product: res.data })
      })
  }

  render() {
    const { name, price, description } = this.state.product;
    return (
      <>
        <Header as="h1">{name}</Header>
        <p>${price}</p>
        <p>{description}</p>
      </>
    );
  };
};

export default Product;