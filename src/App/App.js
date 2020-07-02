import React from 'react';
import './App.css';

/* Components */
import AddItem from '../components/AddItem';
import Dashboard from '../components/Dashboard';

export default class App extends React.Component {
  state = {
    items: [],
  };

  render() {
    return (
      <>
        <main>
          <AddItem />
          <Dashboard />
        </main>
      </>
    );
  }
}
