import React from 'react';
import itemService from './itemService';

export default React.createContext({
  items: [],
  addItem: itemService.addItem,
  deleteItem: itemService.deleteItem,
  getAllItems: itemService.getAllItems,
  editItem: itemService.editItem,
  isFetching: true,
  isLoading: true,
});
