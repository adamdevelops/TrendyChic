const initialState = {
      search: 'hi',
      act: {
        cart: [],
        history: [],
        favorites: []
      },
      clothing: [
        {id: 1, name: "Light Blue Dress", price: 20, imgSrc: "/tops/1.jpg"},
        {id: 2, name: "Nude Dress with Blue Floral Design", price: 20, imgSrc: "/tops/4.jpg"},
        {id: 3, name: "White Dress with Gold Design", price: 15, imgSrc: "/tops/5.jpg"},
        {id: 4, name: "Brown Button Shirt", price: 15, imgSrc: "/tops/6.jpg"},
        {id: 5, name: "Yellow Dress", price: 27, imgSrc: "/tops/7.jpg"},
        {id: 6, name: "White Dress with Flower Design", price: 40, imgSrc: "/tops/8.jpg"},
        {id: 7, name: "White Blossom Mary shirt", price: 13, imgSrc: "/tops/9.jpg"},
        {id: 8, name: "White Dress with Black Design", price: 22, imgSrc: "/tops/3.jpg"},
        {id: 9, name: "White Floral Long Sleeve Dress", price: 27, imgSrc: "/tops/10.jpg"}
      ]
};

const appsReducer = (state = initialState, action) => {
  console.log('inside reducer');
  console.log(state.act);



  switch(action.type) {
    case 'ADD_CART':
      console.log('inside add case');

      console.log('Action:');
      console.log(action.payload);
      console.log('State:');
      console.log(state);
      console.log('Cart:');
      console.log(state.act.cart);

      return {
        ...state,
        act: {
          ...state.act,
          cart: state.act.cart.concat(action.payload)
        }
      };

    case 'DELETE_CART_ITEM':
      console.log('inside delete case');
      const delID = action.payload.id;

      return {
        ...state,
        act: {
          ...state.act,
          cart: state.act.cart.filter(state => state.id !== delID)
        }
      };

    case 'EDIT_CART':
      console.log('inside edit case');

      // Otherwise, this is the one we want - return an updated value
      return state;

    default:
      return state;

  }
}


export default appsReducer
