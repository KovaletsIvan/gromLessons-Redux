import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialStateCart = { products: [] };

export const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    case REMOVE_PRODUCT: {
      const newProductList = state.products.filter(
        (prod) => prod.id !== action.payload.productId
      );
      return { products: newProductList };
    }
    default:
      return state;
  }
};
