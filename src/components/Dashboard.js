import React, { useEffect, useState } from 'react';
// import config from '../config';
// import ItemCardList from './ItemCardList';
import ItemCard from './ItemCard';
import { DashboardHeader } from './Header';
// import EditItem from './EditItem';
import './dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch(`/items`).then((res) => res.json());
      // const jsonData = await response.json();
      console.log(response);

      // console.log(jsonData);

      setItems(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Delete Func
  const deleteItem = async (id) => {
    try {
      const deleteItem = await fetch(`/items/${id}`, {
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
