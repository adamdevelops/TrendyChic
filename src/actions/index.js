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

// Add item to cart
export const purchaseITEMS = items => {

  return{
    type: 'BUY_ITEMS',
    payload: {
      items: items
    }
  };
};
