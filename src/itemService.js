import config from './config';

const addItem = (newItem) => {
  return fetch(`${config.API_ENDPOINT}/api/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
};

const deleteItem = (id) => {
  return fetch(`${config.API_ENDPOINT}/api/items/${id}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.error({ error });
  });
};

// this.context.setItems(this.context.items.filter((item) => item.id !== id));

const getAllItems = () => {
  return fetch(`${config.API_ENDPOINT}/api/items`)
    .then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));

      return res.json();
    })

    .catch((error) => {
      console.error({ error });
    });
};

const editItem = (editedItem, itemid) => {
  return fetch(`${config.API_ENDPOINT}/api/items/${itemid}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(editedItem),
  });
};
export default {
  addItem,
  deleteItem,
  getAllItems,
  editItem,
};
