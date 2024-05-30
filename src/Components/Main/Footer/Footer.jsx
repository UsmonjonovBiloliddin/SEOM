import "./Footer.scss";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_left">
        <div className="Logo">
          <img src="/public/images/gerb.png" alt="" />
          <p>Sanitariya-epidemiologik osoyishtalik markazi</p>
        </div>
        <div className="Contact">
          <Link>
            <div className="item">
              <div className="icon">
                <SlLocationPin />
              </div>
              <p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
            </div>
          </Link>
          <Link>
            <div className="item">
              <div className="icon">
                <IoCallOutline />
              </div>
              <p>+998 97 628 28 82</p>
            </div>
          </Link>
          <Link>
            <div className="item">
              <div className="icon">
                <HiOutlineMail />
              </div>
              <p>Faksa.the@gmail.com</p>
            </div>
          </Link>
          <Link>
            <div className="item">
              <div className="icon">
                <MdOutlineNotListedLocation />
              </div>
              <p>
                Avtobuslar: 84, 100, 151. Mikroavtobuslar: 4, 12, 29. Moljal:
                Bunyodkor stadioni
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="Footer_right">
        <div className="categories">
          <div className="category">
            <h3>Vazirlik</h3>
            <ul>
              <li>
                <Link>Umumiy ma’lumot</Link>
              </li>
              <li>
                <Link>Tarkiyib tuzilma</Link>
              </li>
              <li>
                <Link>Xududiy boshqarmalar</Link>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Hujjatlar</h3>
            <ul>
              <li>
                <Link>Umumiy ma’lumot</Link>
              </li>
              <li>
                <Link>Raxbariyat </Link>
              </li>
              <li>
                <Link>Tarkiyib tuzilma </Link>
              </li>
              <li>
                <Link>Xududiy boshqarmalar</Link>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Matbuot xizmati</h3>
            <ul>
              <li>
                <Link>Yangiliklar</Link>
              </li>
              <li>
                <Link>Uchrashuvlar</Link>
              </li>
              <li>
                <Link>Tadbirlar</Link>
              </li>
              <li>
                <Link>Xududiy boshqarmalar</Link>
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Matbuot xizmati</h3>
            <ul>
              <li>
                <Link>Yangiliklar</Link>
              </li>
              <li>
                <Link>Uchrashuvlar</Link>
              </li>
              <li>
                <Link>Tadbirlar</Link>
              </li>
              <li>
                <Link>Tenderlar</Link>
              </li>
              <li>
                <Link>Majlislar</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="networks">
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="network">
            <p>Ijtimoiy tarmoqlar</p>
            <div className="boxes">
              <Link>
                {" "}
                <div className="box">
                  <FaTelegram />
                </div>
              </Link>
              <Link>
                <div className="box">
                  <FaInstagram />
                </div>
              </Link>
              <Link>
                <div className="box">
                  <FaYoutube />
                </div>
              </Link>
              <Link>
                <div className="box">
                  <FaWhatsapp />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
