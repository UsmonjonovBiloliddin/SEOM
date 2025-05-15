import { CiCalendarDate } from "react-icons/ci";
import "./Events.scss";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Pagination } from "@mui/material";
import { LinkPages } from "../../Components";

const Tadbirlar = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="Tadbirlar">
        <div className="Tadbirlar_boxes">
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="Tadbirlar_box">
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
              <Link to={"/Inside/Events"}>
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

export default Tadbirlar;
