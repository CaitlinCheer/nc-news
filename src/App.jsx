import "./css files/Header.css";
import Header from "./Header";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </section>
  );
}

export default App;
