import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import axios from 'axios';
import ProductForm from './ProductForm';
import styled from 'styled-components';

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

  removeProduct = () => {
    const { department_id, id } = this.state.product;
    axios.delete(`/api/departments/${department_id}/products/${id}`)
      .then(
        this.props.history.push(`/${department_id}/products`)
      )
  }

  render() {
    const { name, price, description } = this.state.product;
    return (
      <>
        <Header as="h1">{name}</Header>
        <StyledPrice>${price}</StyledPrice>
        <p>{description}</p>
        <Button icon="pencil" onClick={this.toggleEdit}/>
        <Button icon="trash" onClick={this.removeProduct}/>
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

const StyledPrice = styled.h3`
  color: #5E6181;
`;

export default Product;