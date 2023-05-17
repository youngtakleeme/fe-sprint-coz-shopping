// let initialState = {};

// fetch("http://cozshopping.codestates-seb.link/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => {
//     sortedItems = data.sort((a, b) => a.id - b.id);
//     initialState = { productList: sortedItems, bookmarkedItems: [] };
//     console.log(sortedItems);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// 일단은 윤희님 말대로 북마크된 상품의 전체 데이터를 형태로 저장하자[{},{}]
const initialState = {
  productList: [],
  bookmarkedItems: [],
  // bookmarkedItems: { id: [] },
};

export default initialState;
