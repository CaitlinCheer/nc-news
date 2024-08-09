import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../API";
import "./cssFiles/SideBarT.css";

export default function SideBarT() {
  const [isOpen, setIsOpen] = useState(false);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setAllTopics(topics);
    });
  });

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={`sidebar-topics ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content-topics">
          <h2>Topics</h2>
          <ul>
            {allTopics.map((topic, index) => {
              return (
                <Link to={`/articles/${topic.slug}`}key={index}>
                  <li >
                    <h3>{topic.slug}</h3>
                    <b>{topic.description}</b>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <button className="toggle-button-topics" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} All Topics
      </button>
      <div
        className={`overlay-topics ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
