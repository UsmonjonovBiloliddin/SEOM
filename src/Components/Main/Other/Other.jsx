import { Link } from "react-router-dom";
import "./Other.scss";
import { CiCalendarDate } from "react-icons/ci";

const Other = () => {
  return (
    <div className="Other">
      <div className="Other_text">
        <h2>Boshqa yangiliklar</h2>
      </div>
      <div className="Other_boxes">
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>{" "}
        <Link to={"/Inside/News"}>
          <div className="Other_box">
            <div className="box_img">
              <img src="../images/Other.png" alt="" />
            </div>
            <div className="box_text">
              <h3>
                Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari
              </h3>
              <span>
                {" "}
                <CiCalendarDate />
                25.08.2022
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Other;
