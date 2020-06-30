import './dashboard.css';
import React, { Component } from 'react';
import ItemCardList from './ItemCardList';
import AppContext from '../../AppContext';
import { DashboardHeader } from '../Header';

// const getAllItems = async () => {
//   try {
//     const response = await fetch(`${config.API_ENDPOINT}/items`);
//     const jsonData = response.json();
//     console.log(jsonData);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

class Dashboard extends Component {
  componentDidMount() {
    this.context.getAllItems();
  }
  render() {
    return (
      <>
        <DashboardHeader />
        <main>
          <div className='dashboard'>
            <ItemCardList />
          </div>
        </main>
      </>
    );
  }
}

Dashboard.contextType = AppContext;
export default Dashboard;
