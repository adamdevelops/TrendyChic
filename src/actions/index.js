// Add item to cart
export const addITEM = item => {

  return{
    type: 'ADD_CART',
    payload: {
      id: item.id,
      name: item.name
    }
  };
};
