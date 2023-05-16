import { useEffect, useState } from "react";
import styles from "./App.module.css";
import BookmarkPage from "./Pages/BookmarkPage";
import MainPage from "./Pages/MainPage";
import ProductListPage from "./Pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [allBookmarkedItem, setAllBookmarkedItem] = useState(() => {
    const initialData = localStorage.getItem("bookmarked");
    return initialData ? JSON.parse(initialData) : [];
  });
  console.log(allBookmarkedItem);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setProductList(sortedData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarked", allBookmarkedItem);
  }, [allBookmarkedItem]);

  return (
    <Router>
      <div className={styles["app-container"]}>
        <Header />
        <div className="error-message">
          {error && (
            <>
              <p>{error}</p>
              <p>
                필요한 상품 데이터를 받아오지 못했습니다. 화면을 새로고침
                해주세요
              </p>
            </>
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                productList={productList}
                setAllBookmarkedItem={setAllBookmarkedItem}
                allBookmarkedItem={allBookmarkedItem}
              />
            }
          />
          <Route path="/products/list" element={<ProductListPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
