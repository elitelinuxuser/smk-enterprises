import { FETCH_PRODUCTS, FETCH_CATEGORIES, FETCH_BILL } from "../actions/types";

export default (
  state = { products: [], categories: [], bills: [] },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: [...state.products, action.payload] };

    case FETCH_CATEGORIES:
      return { categories: action.payload };
    case FETCH_BILL:
      return { bills: action.payload };
    // case FETCH_RETURN:
    //   return { return: action.payload };
    default:
      return state;
  }
};
