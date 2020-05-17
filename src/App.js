import React, { Component } from 'react';
import Nav from './container/nav'
import Grid from './container/Grid'


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Grid/>
      </div>
    );
  }
}

export default App;
