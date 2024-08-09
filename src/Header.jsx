import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={"/"}>
      <section className="Header">
        <img src="https://www.shutterstock.com/image-vector/gray-news-icon-isolated-on-260nw-420952033.jpg" />
        <h1> North News</h1>
      </section>
    </Link>
  );
}
