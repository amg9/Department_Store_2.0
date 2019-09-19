import React from 'react';
import { Header, Form, } from 'semantic-ui-react';
import axios from 'axios';

class DepartmentForm extends React.Component {
  state = { name: "", }

  componentDidMount() {
    if (this.props.name) {
      this.setState({ name: this.props.name })
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.name) {
      this.props.updateDep(this.state.name)
    } else {
      axios.post('/api/departments', this.state)
        .then( res => {
          this.props.history.push('/departments')
        })
    }
  }

  render() {
    return (
      <>
        { 
          this.props.name ? 
            <Header as="h2">Edit Department</Header>
          :
            <Header as="h1">Add a Department</Header>            
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label="Name"
            name="name"
            placeholder="Department Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Form.Button color="violet">Submit</Form.Button>
        </Form>
      </>
    );
  };
};
  
export default DepartmentForm;