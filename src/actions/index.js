// action types
export const SET_INITIAL_BOOKMARK = "SET_INITIAL_BOOKMARK";
export const ADD_TO_PRODUCT_LIST = "ADD_TO_PRODUCT_LIST";
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";

// actions creator functions
// dispatch 되는곳이 총 몇군데이지?
// App 컴포넌트 처음 시작할때, Item 컴포넌트 북마크 클릭될때.
export const setInitialBookmark = (bookmarkedItemList) => {
  return {
    type: SET_INITIAL_BOOKMARK,
    payload: bookmarkedItemList,
  };
};

export const addToProductList = (sortedData) => {
  return {
    type: ADD_TO_PRODUCT_LIST,
    payload: sortedData,
  };
};

export const addToBookmark = (productData) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: productData,
  };
};
export const removeFromBookmark = (productData) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: productData,
  };
};
