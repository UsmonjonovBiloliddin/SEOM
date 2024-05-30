import { FaArrowRightLong } from "react-icons/fa6";
import "./Management.scss";
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
const Management = () => {
  return (
    <div className="Management">
      <div className="Management_text">
        <h1>Xududiy boshqarmalar</h1>
        <button>
          Batafsil <FaArrowRightLong />
        </button>
      </div>
      <div className="Management_items">
        <div className="Management_item">
          <div className="img">
            <img src="../images/Managment.png" alt="" />
          </div>

          <div className="text">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <div className="item"><FaRegUser /><p>Eshonov Fakhriyor</p></div>
            <div className="item"><IoCallOutline /><p>+998 97 628 28 82</p></div>
            <div className="item"><SlLocationPin /><p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p></div>
          </div>
        </div>
        <div className="Management_item_text">
        <div className="text">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <div className="item"><FaRegUser /><p>Eshonov Fakhriyor</p></div>
            <div className="item"><IoCallOutline /><p>+998 97 628 28 82</p></div>
            <div className="item"><SlLocationPin /><p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p></div>
          </div>
        </div>
        <div className="Management_item_text">
        <div className="text">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <div className="item"><FaRegUser /><p>Eshonov Fakhriyor</p></div>
            <div className="item"><IoCallOutline /><p>+998 97 628 28 82</p></div>
            <div className="item"><SlLocationPin /><p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p></div>
          </div>
        </div>
        <div className="Management_item">
          <div className="img">
            <img src="../images/Managment.png" alt="" />
          </div>

          <div className="text">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <div className="item"><FaRegUser /><p>Eshonov Fakhriyor</p></div>
            <div className="item"><IoCallOutline /><p>+998 97 628 28 82</p></div>
            <div className="item"><SlLocationPin /><p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
