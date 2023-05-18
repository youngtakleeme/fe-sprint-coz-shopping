import { useEffect, useState } from "react";
import styles from "./App.module.css";
import BookmarkPage from "./Pages/BookmarkPage";
import MainPage from "./Pages/MainPage";
import ProductListPage from "./Pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToProductList, setInitialBookmark } from "./actions";
import { dummyData } from "./data/dummyData";

function App() {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState("");

  // 앱 시작할때 상품 전체데이터 받아와서 id순으로 정렬해서 redux에 전체상품데이터 저장하기
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        dispatch(addToProductList(sortedData));
      })
      .catch((err) => {
        setErrMsg(err.message);
        console.log(err.message);
      });
  }, []);

  // 백엔드 api 사망했을때 더미데이터용
  // useEffect(() => {
  //   const sortedData = dummyData.sort((a, b) => a.id - b.id);
  //   dispatch({ type: ADD_TO_PRODUCT_LIST, payload: sortedData });
  // }, []);

  // App 시작할때 localStorage에 있는 북마크 데이터 받아와서 redux에 북마크데이터에 업데이트함. 네이밍 다시 고려해봐야함
  useEffect(() => {
    let bookmarkedItemList = JSON.parse(
      localStorage.getItem("bookmarkedItemList")
    );
    if (bookmarkedItemList) {
      dispatch(setInitialBookmark(bookmarkedItemList));
    }
  }, []);

  return (
    <Router>
      <div className={styles["app-container"]}>
        <Header />
        <div className="error-message">
          {errMsg && (
            <>
              <p>{errMsg}</p>
              <p>
                필요한 상품 데이터를 받아오지 못했습니다. 화면을 새로고침
                해주세요
              </p>
            </>
          )}
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
