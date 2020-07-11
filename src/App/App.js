import React from 'react';
import { Route } from 'react-router-dom';
import AppContext from '../AppContext';
import ItemService from '../itemService';
// import config from '../config';

import './App.css';

/* Components */
import AddItem from '../components/AddItem';
import Dashboard from '../components/Dashboard';
import MainHome from '../components/MainHome';

export default class App extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getAllItemsHandler();
  }

  setItems = (items) => {
    console.log(items);

    this.setState({ items });
  };

  addItemHandler = (newitem) => {
    ItemService.addItem(newitem).then((item) =>
      this.setItems([...this.state.items, item])
    );
  };

  deleteItemHandler = (itemId) => {
    ItemService.deleteItem(itemId).then(() =>
      this.setItems(this.state.items.filter((item) => item.id !== itemId))
    );
  };

  getAllItemsHandler = () => {
    ItemService.getAllItems().then((items) => {
      console.log(items);

      this.setItems(items);
    });
  };

  render() {
    const value = {
      items: this.state.items,
      addItem: this.addItemHandler,
      setItems: this.setItems,
      deleteItem: this.deleteItemHandler,
      getAllItems: this.getAllItemsHandler,
    };

    return (
      <AppContext.Provider value={value}>
        <main>
          <Route exact path='/' component={MainHome} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-item' component={AddItem} />
        </main>
      </AppContext.Provider>
    );
  }
}
