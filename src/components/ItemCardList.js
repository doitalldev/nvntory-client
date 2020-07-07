import React from 'react';
import ItemCard from './ItemCard';
// import AppContext from '../../AppContext';

const ItemCardList = (items) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ItemCardList;
