import React, { Component, Fragment } from 'react';
import Router from './Router'; 
import ButtonAppBar from './ButtonAppBar'; 
import logo from './logo.svg';
import './App.css';

  export default class App extends Component {
    render () {
      return (
        <div>
        <Router/>
        <ButtonAppBar/>
      </div> 
      );
  }
}