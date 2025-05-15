import "./Footer.scss";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_left">
        <div className="Logo">
          <img src="../images/gerb.png" alt="" />
          <p>Sanitariya-epidemiologik osoyishtalik markazi</p>
        </div>
        <div className="Contact">
          <NavLink>
            <div className="item">
              <div className="icon">
                <SlLocationPin />
              </div>
              <p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="item">
              <div className="icon">
                <IoCallOutline />
              </div>
              <p>+998 97 628 28 82</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="item">
              <div className="icon">
                <HiOutlineMail />
              </div>
              <p>Faksa.the@gmail.com</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="item">
              <div className="icon">
                <MdOutlineNotListedLocation />
              </div>
              <p>
                Avtobuslar: 84, 100, 151. Mikroavtobuslar: 4, 12, 29. Moljal:
                Bunyodkor stadioni
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="Footer_right">
        <div className="categories">
          <div className="category">
            <h3>Vazirlik</h3>
            <ul>
              <li>
                <NavLink to={"/malumot"}>Umumiy ma’lumot</NavLink>
              </li>
              <li>
                <NavLink to={"/Structure"}>Tarkiyib tuzilma</NavLink>
              </li>
              <li>
                <NavLink to={"/Administrations"}>Xududiy boshqarmalar</NavLink>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Hujjatlar</h3>
            <ul>
              <li>
                <NavLink to={"/malumot"}>Umumiy ma’lumot</NavLink>
              </li>
              <li>
                <NavLink to={"/LeaderShip"}>Raxbariyat </NavLink>
              </li>
              <li>
              <NavLink to={"/Structure"}>Tarkiyib tuzilma</NavLink>
              </li>
              <li>
              <NavLink to={"/Administrations"}>Xududiy boshqarmalar</NavLink>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Matbuot xizmati</h3>
            <ul>
              <li>
                <NavLink to={"/News"}>Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink to={"/Meetings"}>Uchrashuvlar</NavLink>
              </li>
              <li>
                <NavLink to={"/Events"}>Tadbirlar</NavLink>
              </li>
              <li>
              <NavLink to={"/Administrations"}>Xududiy boshqarmalar</NavLink>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Matbuot xizmati</h3>
            <ul>
              <li>
              <NavLink to={"/News"}>Yangiliklar</NavLink>
              </li>
              <li>
              <NavLink to={"/Meetings"}>Uchrashuvlar</NavLink>
              </li>
              <li>
              <NavLink to={"/Events"}>Tadbirlar</NavLink>
              </li>
              <li>
                <NavLink to={"/Tenders"}>Tenderlar</NavLink>
              </li>
              <li>
                <NavLink to={"/Majlislar"}>Majlislar</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="networks">
          <div className="text">
            <p>
              Loem Ipsum is simply dummy text of the printing and typesetting
              industry. Loem Ipsum has been the industry's standard dummy text
             
              electronic typesetting, emaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="network">
            <p>Ijtimoiy tarmoqlar</p>
            <div className="boxes">
              <NavLink>
                <div className="box">
                  <FaTelegram />
                </div>
              </NavLink>
              <NavLink>
                <div className="box">
                  <FaInstagram />
                </div>
              </NavLink>
              <NavLink>
                <div className="box">
                  <FaYoutube />
                </div>
              </NavLink>
              <NavLink>
                <div className="box">
                  <FaWhatsapp />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
