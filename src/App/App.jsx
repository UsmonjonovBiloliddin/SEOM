import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Background, Footer, Home, Navbar, Navbar_button } from ".";
import { useSelector } from "react-redux";
const App = () => {
  const {color , size} = useSelector(state => state.background)
  return (
    <div className={`App ${color} ${size}`}>
      <Navbar />
      <Navbar_button/>
      <Background/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
