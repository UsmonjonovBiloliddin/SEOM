import { CiCalendarDate } from "react-icons/ci";
import "./Meetings.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { LinkPages } from "../../Components";
const Meetings = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="Meetings">
        <div className="Meetings_boxes">
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard 
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
               <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
               <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="Meetings_boxes_box">
            <div className="img">
              <img src="../images/Yangiliklarimg.png" alt="" />
            </div>
            <div className="text">
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
               <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA Maqsad Sog'lom turmush tarzi.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard \
              </p>
              <Link to={"/Inside/Meetings"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Meetings;
