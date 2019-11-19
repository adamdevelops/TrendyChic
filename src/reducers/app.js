const initialState = {
    app: [{
      search: '',
      act: [{
        cart: [],
        history: [],
        favorites: []
      }],
      clothing: [
        {id: 1, name: "Light Blue Dress", price: "20", imgSrc: "/tops/1.jpg"}
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
