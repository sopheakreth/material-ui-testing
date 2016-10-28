import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';

const App = () => (

  <div>
    <AppBar title={"My App"}/>
    <Grid fluid>
      <Row>
        <Col md={6}>Hello</Col>
        <Col md={2}>This my page</Col>
      </Row>
    </Grid>
  </div>
);

export default App;
