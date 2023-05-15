import styles from "./App.module.css";
import BookmarkPage from "./Pages/BookmarkPage";
import MainPage from "./Pages/MainPage";
import ProductListPage from "./Pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles["app-container"]}>
        <Header />
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
