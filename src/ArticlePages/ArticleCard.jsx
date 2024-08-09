import { useNavigate } from "react-router-dom";

import "../cssFiles/ArticleCard.css"

export default function ArticleCard({ article }) {

    const navigate = useNavigate();

  function handleClick() {
    navigate(`/article/${article.article_id}`, { state: { id: article.article_id} });
  }

  return (
    
      <section className="articles-info" onClick={handleClick}>
        <div className="articles-writing">
        <h3>{article.title}</h3>
        <h5>By: {article.author}</h5>
        <p>Votes: {article.votes}</p>
        </div>
        <img src={article.article_img_url} />
      </section>
      
    
  );
}

