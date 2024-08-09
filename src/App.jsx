import "./cssFiles/Header.css";
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePages/ArticlePage";
import ArticleTopicPages from "./ArticlePages/ArticleTopicPages";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
        <Route path="/articles/:topic" element={<ArticleTopicPages />} />
      </Routes>
    </section>
  );
}

export default App;
