import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import axios from 'axios';

class ProductForm extends React.Component {
  state = { name: "", price: null, description: "", }

  componentDidMount() {
    const { name, price, description, } = this.props
    this.setState({ name, price, description, })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    const { department_id, id, toggleEdit, } = this.props
    if (id) {
      axios.put(`/api/departments/${department_id}/products/${id}`, this.state)
        .then(
          toggleEdit()
        )
    } else {
      const { department_id, } = this.props.match.params
      axios.post(`/api/departments/${department_id}/products`, this.state)
        .then(
          this.props.history.push(`/${department_id}/products`)
        )
    }
  }

  render() {
    const { name, price, description, } = this.state
    return (
      <>
        { 
          this.props.name ? 
            <Header as="h2">Edit Product</Header> 
          :
            <Header as="h1">Add a Product</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="violet">Submit</Form.Button>
        </Form>
      </>
    );
  };
};

export default ProductForm;