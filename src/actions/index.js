import v4 from 'node-uuid';

// Add item to cart
export const addITEM = item => {

  return{
    type: 'ADD_CART',
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
      imgSrc: item.imgSrc
    }
  };
};

export const deleteCART_ITEM = item => {

  return{
    type: 'DELETE_CART_ITEM',
    payload: {
      id: item.id,

    }
  };
};

// let order_id = 1;

// Add items to history
export const purchaseITEMS = (items, date) => {

  return{
    type: 'BUY_ITEMS',
    payload: {
      id: v4(),
      items: items,
      date: date
    }
  };
};

// Add item to favorite
export const addFAVORITE = item => {

  return{
    type: 'ADD_FAVORITE',
    payload: {
      id: item.id,
      name: item.name,
      price: item.price,
      imgSrc: item.imgSrc
    }
  };
};

export const deleteFAVORITE = item => {

  return{
    type: 'DELETE_FAVORITE',
    payload: {
      id: item.id,

    }
  };
};

export const filterSIZE = (size, checked_status) => {
  return{
    type: 'FILTER_SIZE',
    payload: {
      id: size,
      checked_status: checked_status
    }
  };
};
