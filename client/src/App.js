import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import Department from './components/Department';
import DepartmentForm from './components/DepartmentForm';
import Products from './components/Products';
import Product from './components/Product';
import ProductForm from './components/ProductForm';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/:department_id/products" component={Products} />
        <Route exact path="/:department_id/products/new" component={ProductForm} />
        <Route exact path="/:department_id/products/:id" component={Product} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </AppContainer>
);

const AppContainer = styled.div`
  background: linear-gradient(to bottom, #f5f5f5, #a096b5);
  min-height: 620px;
`;

export default App;
