import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import AppContext from '../../AppContext';

const ItemCardList = () => {
  const context = React.useContext(AppContext);
  return (
    <ul>
      {context.items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ItemCardList;
