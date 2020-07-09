import React from 'react';
// import config from '../config';
// import ItemCardList from './ItemCardList';
import ItemCard from './ItemCard';
import { DashboardHeader } from './Header';
import AppContext from '../AppContext';

// import EditItem from './EditItem';

import './dashboard.css';

class Dashboard extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    this.context.getAllItems();
  }
  // const [items, setItems] = useState([]);

  // const getItems = async () => {
  //   try {
  //     const response = await fetch(
  //       `${config.API_ENDPOINT}/api/items`
  //     ).then((res) => res.json());
  //     // const jsonData = await response.json();

  //     setItems(response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // //Delete Func
  // const deleteItem = async (id) => {
  //   try {
  //     await fetch(`${config.API_ENDPOINT}/api/items/${id}`, {
  //       method: 'DELETE',
  //     });
  //     setItems(items.filter((item) => item.id !== id));
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getItems();
  // }, []);
  render() {
    return (
      <>
        <DashboardHeader />
        <ul>
          {this.context.items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default Dashboard;
