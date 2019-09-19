import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import axios from 'axios';
import ProductForm from './ProductForm';

class Product extends React.Component {
  state = { 
    product: {}, 
    showEdit: false,
  }

  componentDidMount() {
    this.getProduct()
  }

  componentDidUpdate() {
    this.getProduct()
  }

  getProduct = () => {
    const { department_id, id } = this.props.match.params;
    axios.get(`/api/departments/${department_id}/products/${id}`)
      .then( res => {
        this.setState({ product: res.data })
      })
  }

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit, })
  }

  render() {
    const { name, price, description } = this.state.product;
    return (
      <>
        <Header as="h1">{name}</Header>
        <p>${price}</p>
        <p>{description}</p>
        <Button icon="pencil" onClick={this.toggleEdit}/>
        { 
          this.state.showEdit ? 
            <ProductForm {...this.state.product} toggleEdit={this.toggleEdit}/> 
          : 
            null 
        }  
      </>
    );
  };
};

export default Product;