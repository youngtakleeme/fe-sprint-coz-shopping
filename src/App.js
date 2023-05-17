import { useEffect, useState } from "react";
import styles from "./App.module.css";
import BookmarkPage from "./Pages/BookmarkPage";
import MainPage from "./Pages/MainPage";
import ProductListPage from "./Pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_BOOKMARK,
  ADD_TO_PRODUCT_LIST,
  SET_INITIAL_BOOKMARK,
} from "./actions";

function App() {
  const dispatch = useDispatch();

  // 사실 여기서는 받아올 필요 없지만 그냥 콘솔로그 테스트용임
  const state = useSelector((state) => state);
  const { productList, bookmarkedItems } = state;
  // console.log(state);
  // console.log(productList);

  // 앱 시작할때 상품 전체데이터 받아와서 id순으로 정렬해서 redux에 전체상품데이터 저장하기
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        dispatch({ type: ADD_TO_PRODUCT_LIST, payload: sortedData });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // 앱 시작할때 localStorage에 있는 북마크 데이터 받아와서 redux에 북마크데이터에 업데이트. 네이밍 다시 고려해봐야함
  useEffect(() => {
    const fetchedData = JSON.parse(localStorage.getItem("bookmarkedItemList"));
    // const jsonedData = JSON.parse(fetchedData);
    console.log(fetchedData);
    if (!fetchedData) {
      return;
    }
    dispatch({ type: SET_INITIAL_BOOKMARK, payload: fetchedData });
  }, []);

  // 로컬스토리지에 저장하는 부분 나중에 다시 살펴봐
  // const [error, setError] = useState(null);
  // const [allBookmarkedItem, setAllBookmarkedItem] = useState(() => {
  //   const initialData = localStorage.getItem("bookmarked");
  //   return initialData ? JSON.parse(initialData) : [];
  // });
  // console.log(allBookmarkedItem);

  // useEffect(() => {
  //   localStorage.setItem("bookmarked", allBookmarkedItem);
  // }, [allBookmarkedItem]);

  return (
    <Router>
      <div className={styles["app-container"]}>
        <Header />
        <div className="error-message">
          {/* {error && (
            <>
              <p>{error}</p>
              <p>
                필요한 상품 데이터를 받아오지 못했습니다. 화면을 새로고침
                해주세요
              </p>
            </>
          )} */}
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
