const initialState = {
      search: 'hi',
      act: {
        cart: [],
        history: [],
        favorites: []
      },
      clothing: [  // XS: 1
        {id: 1, name: "Light Blue Dress", price: 20, imgSrc: "/tops/1", color: 1, size: [1,3]},
        {id: 2, name: "Nude Dress with Blue Floral Design", price: 20, imgSrc: "/tops/4", size: 2, color: 2},
        {id: 3, name: "White Dress with Gold Design", price: 15, imgSrc: "/tops/5", size: 3},
        {id: 4, name: "Brown Button Shirt", price: 15, imgSrc: "/tops/6", size: 1, color: 1},
        {id: 5, name: "Yellow Dress", price: 27, imgSrc: "/tops/7", size: 4, color: [2,3]},
        {id: 6, name: "White Dress with Flower Design", price: 40, imgSrc: "/tops/8", size: [2,3]},
        {id: 7, name: "White Blossom Mary Shirt", price: 10, imgSrc: "/tops/9", size: 1},
        {id: 8, name: "White Dress with Black Design", price: 22, imgSrc: "/tops/3", size: [2,4]},
        {id: 9, name: "White Floral Long Sleeve Dress", price: 27, imgSrc: "/tops/10", size: [1,4], color: 2}
      ],
      bottoms: [
        {id: 1, name: "Blue Jeans", price: 23, imgSrc: "/bottoms/1", color: 1, size: [1,2]},
        {id: 2, name: "Black Leather Pants", price: 16, imgSrc: "/bottoms/2", color: 1, size: [1,2]},
        {id: 3, name: "Blue Distressed Jeans", price: 13, imgSrc: "/bottoms/3", color: 1, size: [2,3]},
        {id: 4, name: "Black & White Checkered Skirt", price: 11, imgSrc: "/bottoms/4", color: 1, size: [3,4]},
        {id: 5, name: "Black Skirt with White Flowers", price: 14, imgSrc: "/bottoms/5", color: 1, size: [3,4]},
        {id: 6, name: "Red and Black Polka dot Skirt", price: 8, imgSrc: "/bottoms/6", color: 1, size: [2,3]},
        {id: 7, name: "Cheetah Print Skirt", price: 14, imgSrc: "/bottoms/7", color: 1, size: [1,2]},
        {id: 8, name: "Brown Corduroy Pants", price: 22, imgSrc: "/bottoms/8", size: [2,4]},
        {id: 9, name: "Light Blue Shorts", price: 17, imgSrc: "/bottoms/9", size: [1,4], color: 2}
      ],
      shoes: [
        {id: 1, name: "", price: 25, imgSrc: "/bottoms/1", color: 1, size: [1,2]},
        {id: 2, name: "", price: 25, imgSrc: "/bottoms/2", color: 1, size: [1,2]},
        {id: 3, name: "", price: 25, imgSrc: "/bottoms/3", color: 1, size: [1,2]},
        {id: 4, name: "", price: 25, imgSrc: "/bottoms/4", color: 1, size: [1,2]},
        {id: 5, name: "", price: 25, imgSrc: "/bottoms/5", color: 1, size: [1,2]},
        {id: 6, name: "", price: 25, imgSrc: "/bottoms/6", color: 1, size: [1,2]},
        {id: 7, name: "", price: 25, imgSrc: "/bottoms/7", color: 1, size: [1,2]},
        {id: 8, name: "", price: 22, imgSrc: "/bottoms/8", size: [2,4]},
        {id: 9, name: "", price: 17, imgSrc: "/bottoms/9", size: [1,4], color: 2}
      ],
      accessories: [
        {id: 1, name: "", price: 25, imgSrc: "/bottoms/1", color: 1, size: [1,2]},
        {id: 2, name: "", price: 25, imgSrc: "/bottoms/2", color: 1, size: [1,2]},
        {id: 3, name: "", price: 25, imgSrc: "/bottoms/3", color: 1, size: [1,2]},
        {id: 4, name: "", price: 25, imgSrc: "/bottoms/4", color: 1, size: [1,2]},
        {id: 5, name: "", price: 25, imgSrc: "/bottoms/5", color: 1, size: [1,2]},
        {id: 6, name: "", price: 25, imgSrc: "/bottoms/6", color: 1, size: [1,2]},
        {id: 7, name: "", price: 25, imgSrc: "/bottoms/7", color: 1, size: [1,2]},
        {id: 8, name: "", price: 22, imgSrc: "/bottoms/8", size: [2,4]},
        {id: 9, name: "", price: 17, imgSrc: "/bottoms/9", size: [1,4], color: 2}
      ],
      displayed_clothing: [],
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

    case 'BUY_ITEMS':
      console.log('inside buy items case');
      console.log(action.payload);
      const emptyArray = [];

      // Otherwise, this is the one we want - return an updated value
      return {
        ...state,
        act: {
          ...state.act,
          history: state.act.history.concat(action.payload),
          cart: state.act.history.concat(emptyArray)
        }
      };

      case 'ADD_FAVORITE':
        console.log('inside add favorite case');

        console.log('Action:');
        console.log(action.payload);
        console.log('State:');
        console.log(state);

        return {
          ...state,
          act: {
            ...state.act,
            favorites: state.act.favorites.concat(action.payload)
          }
        };

        case 'DELETE_FAVORITE':
          console.log('inside delete case');
          const delFavID = action.payload.id;

          return {
            ...state,
            act: {
              ...state.act,
              favorites: state.act.favorites.filter(state => state.id !== delFavID)
            }
          };

          case 'FILTER_SIZE':
          console.log('inside filter size case');
          const sizeID = action.payload.id;
          let filtered_clothes = [];

          console.log(action.payload)

          filtered_clothes = action.payload.clothing.filter(item => {
            if (item.size instanceof Array){
              console.log('if')
              for(var i=0; i < item.size.length; i++){
                return item.size[i] === sizeID
              }
            }
            return item.size === sizeID;
          });

          console.log('filtered_clothes')
          console.log(filtered_clothes);



            return {
              ...state,
              displayed_clothing: filtered_clothes
            };

          case 'FILTER_COLOR':
            console.log('inside filter color case');
            const colorID = action.payload.id;
            let filtered_color_clothes = [];

            console.log(colorID)

            // filtered_color_clothes = state.clothing.filter(item => item.color === colorID);

            filtered_color_clothes = state.clothing.filter(item => {
              if (item.color instanceof Array){
                console.log('if')
                for(var i=0; i < item.color.length; i++){
                  return item.color[i] === colorID
                }
              }
              return item.color === colorID;
            });


            console.log('filtered_color_clothes')
            console.log(filtered_color_clothes);

            return {
              ...state,
              displayed_clothing: filtered_color_clothes
            };

            case 'FILTER_PRICE':
              console.log('inside filter size case');
              const priceID = action.payload.id;
              let filtered_price_clothes = [];

             filtered_price_clothes = state.clothing.filter(item => item.price === priceID);

              console.log('filtered_clothes')
              console.log(filtered_price_clothes);

              return {
                ...state,
                displayed_clothing: filtered_price_clothes
              };


    default:
      return state;
  }
}

export const updateCartPrice = (state) => {
  let final_total = 0;

  state.apps.act.cart.map((cart_item) => {
      console.log('itemPrice');
      console.log(cart_item.price);

      final_total += cart_item.price;
      console.log('final_total')
      console.log(final_total)
      }
    )

  console.log('final_total in updateCartPrice')
  console.log(final_total)

  return final_total
}

export default appsReducer
