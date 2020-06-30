import React from 'react';
import { DashboardHeader } from '../Header';

class AddItem extends React.Component {
  render() {
    return (
      <>
        <DashboardHeader />
        <main>
          <section>
            <form class='add-item-form' action='submit'>
              <label for='name'>Item Name</label>
              <input type='text' name='name' id='name' />
              <label for='description'>Description</label>
              <input type='text' name='description' id='description' />
              <label for='price'>Price</label>
              <input type='number' name='price' id='price' />
              <label for='current-inventory'>Inventory</label>
              <input
                type='number'
                name='current-inventory'
                id='current-inventory'
              />
              <button>Submit</button>
            </form>
          </section>
        </main>
      </>
    );
  }
}

export default AddItem;
