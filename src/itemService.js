import config from './config';

const addItem = (newItem) =>
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

const deleteItem = (id) => {
  try {
    fetch(`${config.API_ENDPOINT}/api/items/${id}`, {
      method: 'DELETE',
    });

    // this.context.setItems(this.context.items.filter((item) => item.id !== id));
  } catch (error) {
    console.error(error.message);
  }
};

const getAllItems = () => {
  fetch(`${config.API_ENDPOINT}/api/items`)
    .then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));

      return res.json();
    })
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.error({ error });
    });
};
export default {
  addItem,
  deleteItem,
  getAllItems,
};
