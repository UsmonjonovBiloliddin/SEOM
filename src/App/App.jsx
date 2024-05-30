import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Background, Footer, Home, Navbar, Navbar_button, News } from ".";
import "./App.scss";
const App = () => {
  const { color, size } = useSelector((state) => state.background);
  return (
    <div className={`App ${color} ${size}`}>
      <Navbar />
      <Navbar_button />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
