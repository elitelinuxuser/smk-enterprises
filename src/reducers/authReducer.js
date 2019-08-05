import { FETCH_USER } from "../actions/types";

export default (state = { isLoading: true, user: null }, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return { isLoading: false, user: action.payload };
    default:
      return state;
  }
};
