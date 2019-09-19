import React from 'react';
import { Header, Card, } from 'semantic-ui-react';
import axios from 'axios';
import { Link, } from 'react-router-dom';

class Products extends React.Component {
  state = { 
    products: [],
  }

  componentDidMount() {
    const { department_id } = this.props.match.params;
    axios.get(`/api/departments/${department_id}/products`)
      .then( res => {
        this.setState({ products: res.data, })
      })
  }

  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <Card.Group itemsPerRow="4">
          { this.state.products.map( (product) => 
            <Card as={Link} to={`/products/${product.id}`} key={product.id}>
              <Card.Content>
                <Card.Header as="h2">{product.name}</Card.Header>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>      
    );
  };
};

export default Products;
