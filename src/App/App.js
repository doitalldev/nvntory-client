import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainHome from '../components/Home/MainHome';
import Dashboard from '../components/Dashboard/Dashboard';
import AppContext from '../AppContext';
import config from '../config';
import AddItem from '../components/AddItem/AddItem';

export default class App extends React.Component {
  state = {
    items: [],
  };

  getAllItems = () => {
    Promise.all([fetch(`${config.API_ENDPOINT}/items`)])
      .then(([itemResponse]) => {
        if (!itemResponse.ok)
          return itemResponse.json().then((e) => Promise.reject(e));

        return Promise.all([itemResponse.json()]);
      })
      .then(([items]) => {
        this.setState({ items });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item],
    });
  };
  deleteItem = (itemId) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemId),
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
          deleteItem: this.deleteItem,
          getAllItems: this.getAllItems,
        }}
      >
        <>
          <Route exact path='/' component={MainHome} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-item' component={AddItem} />
        </>
      </AppContext.Provider>
    );
  }
}
