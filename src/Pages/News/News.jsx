import "./News.scss";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./News.scss";
import { LinkPages } from "../../App";
import { Pagination } from "@mui/material";
const News = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="News">
        <div className="NewsPage_boxes">
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            <div className="NewsPage_boxes_box">
              <img src="../images/Yangiliklarimg.png" alt="" />
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
              <h3>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h3>
              <Link to={"/Inside/News"}>
                Batafsil <FaArrowRightLong />
              </Link>
            </div>
            
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default News;
