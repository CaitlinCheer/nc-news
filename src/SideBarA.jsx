import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./cssFiles/SideBarA.css";


export default function SidebarA({ allArticles }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar-articles ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content-articles">
          <h2>Articles</h2>
          <ul>
            {allArticles.map((article) => (
              <Link to={`/article/${article.article_id}`}key={article.article_id}>
              <li >
                <b>{article.title}</b>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <button className="toggle-button-articles" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} All Articles
      </button>
      <div
        className={`overlay-articles ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

