import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Signup from './components/signup';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  render(){
    return(
      <div>
<Signup/>
      </div>
    )
  }
}
export default App;
