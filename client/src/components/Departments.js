import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios';

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
        { this.state.departments.map( dep => 
          <Header as="h2" key={dep.id}>{dep.name}</Header>
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
