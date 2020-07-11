import config from './config';
//Add a new item, requires an object as parameter
const addItem = (newItem) => {
  return fetch(`${config.API_ENDPOINT}/api/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
};

//Deletes an item from database, required an item id as parameter
const deleteItem = (id) => {
  return fetch(`${config.API_ENDPOINT}/api/items/${id}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.error({ error });
  });
};

//Gets all items from database
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

//Edits an item, requires an object and item id as parameters
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
