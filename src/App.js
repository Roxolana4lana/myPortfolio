import React, { Component } from 'react';


import './styles/output.css'
import Main from './components/Main'
import About from './components/About'
import Arrow from './components/Arrow'
import { Element } from 'react-scroll'
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Element name='home'><Main /></Element>
        <Element name='about'><About /></Element>
        <Element name='arrow'><Arrow /></Element>
        <Element name='form'><Form /></Element>
      </React.Fragment>
    );
  }
}

export default App;
