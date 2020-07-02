import React, { useEffect, useState } from 'react';
import config from '../config';
// import ItemCardList from './ItemCardList';
import ItemCard from './ItemCard';
import { DashboardHeader } from './Header';
// import EditItem from './EditItem';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/items`);
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Delete Func
  const deleteItem = async (id) => {
    try {
      const deleteItem = await fetch(`${config.API_ENDPOINT}/items/${id}`, {
        method: 'DELETE',
      });
      setItems(items.filter((item) => item.id !== id));
      console.log(deleteItem);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(items);

  return (
    <>
      <DashboardHeader />
      <ul>
        {items.map((item) => (
          <ItemCard item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
