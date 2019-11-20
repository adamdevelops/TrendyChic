const initialState = {
    app: [{
      search: '',
      act: [{
        cart: [],
        history: [],
        favorites: []
      }],
      clothing: [
        {id: 1, name: "Light Blue Dress", price: "20", imgSrc: "/tops/1.jpg"},
        {id: 2, name: "Nude Dress with Blue Floral Design", price: "20", imgSrc: "/tops/4.jpg"},
        {id: 3, name: "White Dress with Gold Design", price: "15", imgSrc: "/tops/5.jpg"},
        {id: 4, name: "Brown Button Shirt", price: "15", imgSrc: "/tops/6.jpg"},
        {id: 5, name: "Yellow Dress", price: "27", imgSrc: "/tops/7.jpg"},
        {id: 6, name: "White Dress with Flower Design", price: "40", imgSrc: "/tops/8.jpg"},
        {id: 7, name: "White Blossom Mary shirt", price: "13", imgSrc: "/tops/9.jpg"},
        {id: 8, name: "White Dress with Black Design", price: "22", imgSrc: "/tops/3.jpg"},
        {id: 9, name: "White Dress with Black Design", price: "22", imgSrc: "/tops/3.jpg"}

      ]

    }]
};

const appsReducer = (state = initialState.app, action) => {
  console.log('inside reducer');
  console.log(state);



  switch(action.type) {
    case 'ADD_CART':
      console.log('inside if reducer in reducer');



      return state;

    case 'DELETE_TODO':
      console.log('inside delete case');

      return state;

    case 'EDIT_TODO':
      console.log('inside edit case');

      // Otherwise, this is the one we want - return an updated value
      return state;

    default:
      return state;

  }
}


export default appsReducer
