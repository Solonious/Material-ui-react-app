import React, { Component } from 'react';
// import logo from './logo.svg';

import AppBarExampleIcon from './components/AppBarExampleIcon';
// import DropDownMenu from './components/DropDownMenu';
import TableGrid from './components/TableGrid';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppBarExampleIcon />
            <TableGrid/>
        </div>

    );
  }
}

export default App;
