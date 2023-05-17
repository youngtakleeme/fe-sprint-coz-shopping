import initialState from "./initialState";
import {
  ADD_TO_BOOKMARK,
  ADD_TO_PRODUCT_LIST,
  REMOVE_FROM_BOOKMARK,
  SET_INITIAL_BOOKMARK,
} from "../actions/index";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case SET_INITIAL_BOOKMARK:
      return {
        ...state,
        bookmarkedItems: action.payload,
      };
    case ADD_TO_BOOKMARK:
      localStorage.setItem(
        "bookmarkedItemList",
        JSON.stringify([...state.bookmarkedItems, action.payload])
      );
      return {
        ...state,
        bookmarkedItems: [...state.bookmarkedItems, action.payload],
      };
    case REMOVE_FROM_BOOKMARK:
      localStorage.setItem(
        "bookmarkedItemList",
        JSON.stringify(
          state.bookmarkedItems.filter((bookmarkedItem) => {
            return bookmarkedItem.id !== action.payload.id;
          })
        )
      );
      return {
        ...state,
        bookmarkedItems: state.bookmarkedItems.filter((bookmarkedItem) => {
          return bookmarkedItem.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default itemReducer;
