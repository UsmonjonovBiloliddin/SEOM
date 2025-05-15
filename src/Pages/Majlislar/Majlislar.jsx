import { Pagination } from "@mui/material";
import "./Majlislar.scss";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LinkPages } from "../../Components";

const Majlislar = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <LinkPages />
      <div className="Majlislar">
        <div className="Majlislar_boxes">
          <div className="bb">
            <div className="bb_box">
             <Link>
             <img src="../images/mbig.png" alt="" />
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
             </Link>
            </div>
            <div className="right">
            <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
            </div>
          </div>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
          <Link to={"/Inside/Majlislar"}>
            <div className="Majlislar_box">
              <img src="../images/Majlislar.png" alt="" />
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </h4>
              <span>
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </Link>
        </div>
        <div className="pagination">
          <Pagination count={5} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
};

export default Majlislar;
