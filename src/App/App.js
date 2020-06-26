import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import MainHome from '../components/Home/MainHome';

export default class App extends React.Component {
  state = {
    users: [],
    items: [],
  };

  render() {
    return (
      <>
        <Header />
        <Route exact path='/' component={MainHome} />
      </>
    );
  }
}
