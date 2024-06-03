import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { AboutUs, Administrations, Administrations_inside, Background, CentralApparatus, Contact, Documents, Documents_inside, Footer, Home, LeaderShip, Majlislar, Meetings, Ministries, Navbar, Navbar_button, News, Questions, Search, ServicesInside, Structure, Tadbirlar, Tenderlar, Vacancies } from ".";
import "./App.scss";
const App = () => {
  const { color, size } = useSelector((state) => state.background);
  return (
    <div className={`App ${color} ${size}`}>
      <Search/>
      <Navbar />
      <Navbar_button />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Meetings" element={<Meetings />} />
        <Route path="/Events" element={<Tadbirlar />} />
        <Route path="/Tenders" element={<Tenderlar />} />
        <Route path="/Majlislar" element={<Majlislar/>} />
        <Route path="/Inside/:id" element={<ServicesInside/>} />
        <Route path="/LeaderShip" element={<LeaderShip/>} />
        <Route path="/Vacancies" element={<Vacancies/>} />
        <Route path="/ContactUs" element={<Contact/>} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/Administrations" element={<Administrations/>} />
        <Route path="/Administrations_inside/:id" element={<Administrations_inside/>} />
        <Route path="/Structure" element={<Structure/>} />
        <Route path="/Ministries" element={<Ministries/>} />
        <Route path="/CentralApparatus" element={<CentralApparatus/>} />
        <Route path="/Questions" element={<Questions/>} />
        <Route path="/Documents" element={<Documents/>} />
        <Route path="/Documents_inside" element={<Documents_inside/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
