export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REM0VE_FROM_BASKET":
      // LOGIC FOR REMOVING FROM  BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Item exist in the basket remove it ...
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove product");
      }

      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};
export default reducer;
