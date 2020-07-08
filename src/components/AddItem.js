import React, { useState } from 'react';
import config from '../config';
import './additem.css';

const AddItem = () => {
  /* const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cost, setCost] = useState('');
  const [inventory, setInventory] = useState(''); */

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newItem = {
      sku: e.target['sku'].value,
      name: e.target['name'].value,
      description: e.target['description'].value,
      price: e.target['price'].value,
      cost: e.target['cost'].value,
      inventory: e.target['inventory'].value,
    };

    fetch(`${config.API_ENDPOINT}/api/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newItem),
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return res.json();
    });
  };

  // const onSubmitForm = async (e) => {
  //   console.log(e);

  //   e.preventDefault();
  //   try {
  //     const body = { sku, name, description, price, cost, inventory };
  //     await fetch(`${config.API_ENDPOINT}/api/items`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(body),
  //     });

  //     window.location = '/dashboard';
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

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
          /*    value={sku}
          onChange={(e) => setSku(e.target.value)} */
        />
        <label htmlFor='name'>Name: </label>
        <input
          required
          type='text'
          name='name'
          id='name'
          /*   value={name}
          onChange={(e) => setName(e.target.value)} */
        />
        <label htmlFor='description'>Description: </label>
        <input
          required
          type='text'
          name='description'
          id='description'
          /*  value={description}
          onChange={(e) => setDescription(e.target.value)} */
        />
        <label htmlFor='price'>Price: </label>
        <input
          type='number'
          required
          name='price'
          id='price'
          /*  value={price}
          onChange={(e) => setPrice(e.target.value)} */
        />
        <label required htmlFor='cost'>
          Cost:
        </label>
        <input
          type='number'
          required
          name='cost'
          id='cost'
          /*    value={cost}
          onChange={(e) => setCost(e.target.value)} */
        />
        <label htmlFor='inventory'>Inventory: </label>
        <input
          type='number'
          required
          name='inventory'
          id='inventory'
          /*  value={inventory}
          onChange={(e) => setInventory(e.target.value)} */
        />
        <button type='submit'>Submit</button>

        <button
          type='button' /* onClick={() => (window.location = '/dashboard')} */
        >
          Cancel
        </button>
      </form>
    </>
  );
};
export default AddItem;
