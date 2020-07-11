import React, { useContext } from 'react';
import './additem.css';
import AppContext from '../AppContext';
import { useHistory } from 'react-router-dom';

const EditItem = (props) => {
  const history = useHistory();
  const context = useContext(AppContext);
  const thisitem = props.match.params.id;
  const thatitem = context.items.find((item) => item.id === Number(thisitem));

  //Destructures this specific item
  const { id, sku, name, description, price, cost, inventory } = thatitem;

  const onSubmitForm = (e) => {
    e.preventDefault();
    //Collects new data
    const editedItem = {
      sku: e.target['sku'].value,
      name: e.target['name'].value,
      description: e.target['description'].value,
      price: e.target['price'].value,
      cost: e.target['cost'].value,
      inventory: e.target['inventory'].value,
    };
    //Submits the edited item and the items id
    context.editItem(editedItem, id);

    history.push('/dashboard');
  };
  return (
    <>
      <h1>Edit Item: {name} </h1>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <label htmlFor='sku'>SKU: </label>
        <input required type='text' name='sku' id='sku' defaultValue={sku} />
        <label htmlFor='name'>Name: </label>
        <input required type='text' name='name' id='name' defaultValue={name} />
        <label htmlFor='description'>Description: </label>
        <input
          required
          type='text'
          name='description'
          id='description'
          defaultValue={description}
        />
        <label htmlFor='price'>Price: </label>
        <input
          // pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
          type='number'
          required
          name='price'
          id='price'
          defaultValue={price.replace(/\$/g, '')}
        />
        <label required htmlFor='cost'>
          Cost:
        </label>
        <input
          // pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
          type='number'
          required
          name='cost'
          id='cost'
          defaultValue={cost.replace(/\$/g, '')}
        />
        <label htmlFor='inventory'>Inventory: </label>
        <input
          type='number'
          required
          name='inventory'
          id='inventory'
          defaultValue={inventory}
        />
        <button type='submit'>Submit</button>

        <button type='button' onClick={() => history.push('/dashboard')}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditItem;
