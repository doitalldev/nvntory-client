import React from 'react';
import { withRouter } from 'react-router';
// import config from '../config';
// import ItemCardList from './ItemCardList';
import ItemCard from '../ItemCard/ItemCard';
import { DashboardHeader } from '../Header/Header';
import AppContext from '../../AppContext';

// import EditItem from './EditItem';

import './dashboard.css';

class Dashboard extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.getAllItems();

    console.log('Dashboard componentDidMount ran');
  }

  render() {
    if (this.context.isLoading) return <div>loading...</div>;

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

export default withRouter(Dashboard);
