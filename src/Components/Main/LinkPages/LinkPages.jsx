import { NavLink } from "react-router-dom";
import "./LinkPages.scss"
const NavLinkPages = () => {
  return (
    <div className="NavLinkPages">
      <h1>Matbuot xizmatlari</h1>
      <div className="pages">
        <NavLink to={"/News"}>
          <div className="page">
            <p>Yangiliklar</p>
          </div>
        </NavLink>
        <NavLink to={"/Meetings"}>
          <div className="page">
            <p>Uchrashuvlar</p>
          </div>
        </NavLink>
        <NavLink to={"/Events"}>
          <div className="page">
            <p>Tadbirlar</p>
          </div>
        </NavLink>
        <NavLink to={"/Tenders"}>
          <div className="page">
            <p>Tenderlar</p>
          </div>
        </NavLink>
        <NavLink to={"/Majlislar"}>
          <div className="page">
            <p>Majlislar</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinkPages;
