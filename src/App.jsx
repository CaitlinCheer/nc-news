import "./cssFiles/Header.css";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </section>
  );
}

export default App;
