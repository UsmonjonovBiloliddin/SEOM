import { FaRegUser } from "react-icons/fa";
import "./Administrations_inside.scss";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Title } from "../../Components";
const Administrations_inside = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <Title inside={"Tashkilot haqida"} location={"Xududiy boshqarmalar"} />
      <div className="Administrations_inside">
        <div className="Administrations_inside_box">
          <div className="text">
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
          <div className="img">
            <img src="/public/images/Rectangle 20.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Administrations_inside;
