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
      window.location = '/';
    };
    return (
      <div className='card'>
        <div className='sku'>{sku}</div>
        <div className='title'>{name}</div>
        <div className='description'>{description}</div>
        <span className='price'>{price}</span>
        <span className='cost'>{cost}</span>
        <div className='inventory'>{inventory}</div>

        <EditItem
          item={this.props.item}
          show={this.state.show}
          handleClose={hideEditItem}
        />
        <button type='button' onClick={showEditItem}>
          Edit
        </button>

        <button type='submit' onClick={() => this.props.deleteItem(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default ItemCard;
