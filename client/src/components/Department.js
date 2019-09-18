import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import axios from 'axios';
// import { Link, } from 'react-router-dom';
import DepartmentForm from './DepartmentForm'

class Department extends React.Component {
  state = { 
    department: {}, 
    showEdit: false,
  }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
      this.setState({ department: res.data })
      })
  }

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit, })
  }

  updateDep = (newName) => {
    this.setState({ department: { name: newName }})
    axios.put(`/api/departments/${this.state.department.id}`, { name: newName })
      .then( res => {
        this.toggleEdit()
      })
  }

  render() {
    return (
      <>
        <Header as="h1">{this.state.department.name}</Header>
        { 
          this.state.showEdit ? 
            <DepartmentForm updateDep={this.updateDep} {...this.state.department} /> 
          : 
            null 
        }
        <Button onClick={this.toggleEdit} color="violet">
          Edit Department
        </Button>
      </>
    );
  };
};
  
export default Department;