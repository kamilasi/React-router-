import React, { Component, Fragment } from 'react';
import Router from './Router'; 
import ButtonAppBar from './ButtonAppBar'; 
import logo from './logo.svg';
import './App.css';

  render () {
    return (
    <div>
        <Router/>
        <ButtonAppBar/>
    </div>
    );
  }
}