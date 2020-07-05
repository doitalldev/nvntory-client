import React, { useEffect, useState } from 'react';
import config from '../config';
// import ItemCardList from './ItemCardList';
import ItemCard from './ItemCard';
import { DashboardHeader } from './Header';
// import EditItem from './EditItem';
import './dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      let requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      // const response = await fetch('/items', requestOptions)
      //   .then((response) => response.json())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log('error', error));

      const response = await fetch(
        `${config.API_ENDPOINT}/api/items`
      ).then((res) => res.json());
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
      const deleteItem = await fetch(`${config.API_ENDPOINT}/api/items/${id}`, {
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
