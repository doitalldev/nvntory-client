import React from 'react';
// import config from '../config';
import EditItem from './EditItem';

class ItemCard extends React.Component {
  state = {
    show: false,
  };

  // //Delete Func
  // const deleteItem = async (id) => {
  //   try {
  //     const deleteItem = await fetch(`${config.API_ENDPOINT}/items/${id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log(deleteItem);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  render() {
    const {
      id,
      sku,
      name,
      description,
      price,
      cost,
      inventory,
    } = this.props.item;

    const showEditItem = (e) => {
      this.setState({
        show: true,
      });
    };
    const hideEditItem = (e) => {
      this.setState({ show: false });
      window.location = '/dashboard';
    };
    return (
      <div className='card'>
        <div className='title'>
          <span className='infotitle'>Title: </span>
          {name}
        </div>

        <div className='sku'>
          <span className='infotitle'>SKU: </span>
          {sku}
        </div>

        <div className='description'>
          <span className='infotitle'>Description: </span>
          {description}
        </div>
        <div className='price'>
          <span className='infotitle'>Price: </span>
          {price}
        </div>
        <div className='cost'>
          <span className='infotitle'>Cost: </span>
          {cost}
        </div>
        <div className='inventory'>
          <span className='infotitle'>Inventory: </span>
          {inventory}
        </div>

        <EditItem
          item={this.props.item}
          show={this.state.show}
          handleClose={hideEditItem}
        />
        <div className='card-buttons'>
          <button type='button' onClick={showEditItem}>
            Edit
          </button>

          <button type='submit' onClick={() => this.props.deleteItem(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ItemCard;
