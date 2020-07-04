import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

/* Components */
import AddItem from '../components/AddItem';
import Dashboard from '../components/Dashboard';
import MainHome from '../components/MainHome';

export default class App extends React.Component {
  state = {
    items: [],
  };

  render() {
    return (
      <>
        <main>
          <Route exact path='/' component={MainHome} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-item' component={AddItem} />
        </main>
      </>
    );
  }
}
