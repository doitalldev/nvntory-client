import React, { useState } from 'react';
import config from '../config';

const AddItem = () => {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [inventory, setInventory] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { sku, name, description, price, cost, inventory };
      await fetch(`${config.API_ENDPOINT}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/dashboard';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Add New Item</h1>
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
    </>
  );
};
export default AddItem;
