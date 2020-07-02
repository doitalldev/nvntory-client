import React, { useState } from 'react';
import config from '../config';

import './modal.css';

const EditItem = (props) => {
  console.log(props.item);

  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';
  const [sku, setSku] = useState(props.item.sku);
  const [name, setName] = useState(props.item.name);
  const [description, setDescription] = useState(props.item.description);
  const [price, setPrice] = useState(props.item.price);
  const [cost, setCost] = useState(props.item.cost);
  const [inventory, setInventory] = useState(props.item.inventory);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { sku, name, description, price, cost, inventory };
      await fetch(`${config.API_ENDPOINT}/items/${props.item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className={showHideClassName}>
        <section className='modal-main'>
          <h1>Edit Item</h1>
          <form onSubmit={onSubmitForm}>
            <label htmlFor='sku'>SKU: </label>
            <input
              required
              type='text'
              name='sku'
              id='sku'
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
            <label htmlFor='name'>Name: </label>
            <input
              required
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='description'>Description: </label>
            <input
              required
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor='price'>Price: </label>
            <input
              type='number'
              required
              type='text'
              name='price'
              id='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label required htmlFor='cost'>
              Cost:
            </label>
            <input
              type='number'
              required
              type='text'
              name='cost'
              id='cost'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <label htmlFor='inventory'>Inventory: </label>
            <input
              type='number'
              required
              type='text'
              name='inventory'
              id='inventory'
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
          <button onClick={props.handleClose}>close</button>
        </section>
      </div>
    </>
  );
};
export default EditItem;
