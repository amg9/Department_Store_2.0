import React from 'react';
import { Header, Form, } from 'semantic-ui-react';
import axios from 'axios';

class DepartmentForm extends React.Component {
  state = { name: "", }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = {...this.state};
    axios.post('/api/departments', department)
      .then( res => {
        this.props.history.push('/departments')
      })
  }

  render() {
    return (
      <>
        <Header as="h1">Add a Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Name"
            name="name"
            placeholder="Department Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Button color="violet">Submit</Form.Button>
        </Form>
      </>
    );
  };
};
  
export default DepartmentForm;