import React from 'react';
import { DashboardHeader } from '../Header';
import AppContext from '../../AppContext';
import config from '../../config';

class AddItem extends React.Component {
  render() {
    const handleItemSubmit = (e) => {
      const newItem = {
        sku: e.target['sku'].value,
        name: e.target['name'].value,
        description: e.target['description'].value,
        price: e.target['price'].value,
        cost: e.target['cost'].value,
        inventory: e.target['inventory'].value,
      };
      e.preventDefault();
      const options = {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          'Content-Type': 'application/json',
          // Authorization:
          //   'Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW',
        },
      };
      fetch(`${config.API_ENDPOINT}/items`, options).then((res) => {
        if (!res.ok) {
          throw new Error('something went wrong');
        }
        return res
          .json()
          .then((item) => {
            this.context.addItem(item);
          })
          .catch((err) => {
            console.log({ err });
          });
      });
    };
    const onChange = (e) => {
      this.newItem({ [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
      e.preventDefault();
    };

    console.log(this.context);
    return (
      <>
        <DashboardHeader />
        <main>
          <section>
            <form class='add-item-form' action='submit'>
              <label for='name'>name</label>
              <input type='text' name='name' id='name' />
              <label for='description'>description</label>
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

AddItem.contextType = AppContext;
export default AddItem;
