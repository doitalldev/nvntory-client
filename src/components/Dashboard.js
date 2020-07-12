import React from 'react';
import { withRouter } from 'react-router';
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

export default withRouter(Dashboard);
