import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const NoMatch = () => (
  <>
    <Header as="h1">404 Not Found</Header>
    <p>This page does not exist</p>
    <Link to="/">
      <Button color="violet">Home</Button>
    </Link>
  </>
);

export default NoMatch;