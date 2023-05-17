import initialState from "./initialState";
import {
  ADD_TO_BOOKMARK,
  ADD_TO_PRODUCT_LIST,
  REMOVE_FROM_BOOKMARK,
} from "../actions/index";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };

    case ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmarkedItems: [...state.bookmarkedItems, action.payload],
      };
    case REMOVE_FROM_BOOKMARK:
      return {
        ...state,
        bookmarkedItems: state.bookmarkedItems.filter((bookmarkedItem) => {
          return bookmarkedItem !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default itemReducer;
