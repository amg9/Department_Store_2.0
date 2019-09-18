import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import axios from 'axios';
import { Link, } from 'react-router-dom';

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get('/api/departments')
      .then( res => {
        this.setState({ departments: res.data, })
      })
  }

  render() {
    return (
      <div style={styles.container}>
        <Header as="h1">Departments</Header>
        <Button as={Link} to="/departments/new" color="violet">
          Add Department
        </Button>
        <br />
        { this.state.departments.map( dep => 
          <Link to={`/departments/${dep.id}`}>
            <Header as="h2" key={dep.id}>{dep.name}</Header>
          </Link>
        )}
      </div>      
    );
  };
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
};

export default Departments;
