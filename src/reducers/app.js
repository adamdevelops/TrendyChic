const initialState = {
    app: [{
      search: '',
      act: [{
        cart: [],
        history: [],
        favorites: []
      }],
      clothing: []

    }]
};

const appsReducer = (state = initialState.app, action) => {
  console.log('inside reducer');
  console.log(state);

  switch(action.type) {
    case 'ADD_TODO':
      console.log('inside if reducer in reducer');

      return [
        ...state,
        action.payload
      ];

    case 'DELETE_TODO':
      console.log('inside delete case');

      return newState;

    case 'EDIT_TODO':
      console.log('inside edit case');

      // Otherwise, this is the one we want - return an updated value
      return {
          ...todo,
          ...action.payload
        }
      })

    default:
      return state;

  }
}


export default appsReducer
