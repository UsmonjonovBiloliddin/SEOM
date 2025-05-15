import { FaRegUser } from "react-icons/fa";
import "./Administrations.scss";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import "./Administrations.scss";
import { Link } from "react-router-dom";
import { Title } from "../../Components";
const Administrations = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <Title
        inside={"Tashkilot haqida"}
        location={"Xududiy boshqarmalar"}
        title={"Xududiy boshqarmalar"}
      />
      <div className="Administrations">
        <div className="Administrations_boxes">
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>  <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/Administrations_inside/box"}>
            <div className="Administrations_box">
              <img src="../images/Administrations.png" alt="" />
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
              <div className="about">
                <div className="item">
                  <FaRegUser /> <p> Eshonov Fakhriyor</p>
                </div>
                <div className="item">
                  <IoCallOutline /> <p> +998 97 628 28 82</p>
                </div>
                <div className="item">
                  <SlLocationPin />
                  <p> Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Administrations;
