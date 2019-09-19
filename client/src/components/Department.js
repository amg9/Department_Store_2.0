import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import axios from 'axios';
import DepartmentForm from './DepartmentForm';
import { Link, } from 'react-router-dom';

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

  removeDep = () => {
    axios.delete(`/api/departments/${this.state.department.id}`)
      .then( res => {
        this.props.history.push('/departments')
      })
    // it can delete data I create but not seeded data and I don't know why
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
        <Button icon="pencil" onClick={this.toggleEdit}/>
        <Button icon="trash" onClick={this.removeDep}/>
        <Link to={`/${this.state.department.id}/products`}>
          <Button color="violet">Show Products</Button>
        </Link>
      </>
    );
  };
};
  
export default Department;