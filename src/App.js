import { useEffect, useState } from "react";
import styles from "./App.module.css";
import BookmarkPage from "./Pages/BookmarkPage";
import MainPage from "./Pages/MainPage";
import ProductListPage from "./Pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [AllProductData, setAllProductData] = useState([]);
  const [error, setError] = useState(null);
  // console.log(AllProductData);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setAllProductData(sortedData);
        // console.log(sortedData);
      })
      .catch((err) => {
        // console.dir(err);
        setError(err.message);
      });
  }, []);

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
            element={<MainPage AllProductData={AllProductData} />}
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
