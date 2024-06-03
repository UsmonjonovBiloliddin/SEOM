import { FaAngleRight } from "react-icons/fa";
import { LeadershipBox, Title } from "../../App";
import "./Leadership.scss";

const Leadership = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <Title
        inside={"Tashkilot haqida"}
        location={"Raxbariyat"}
        title={"Rahbariyat"}
      />
      <div className="leadership">
        <div className="leadership_main">
          <div className="main_left">
            <LeadershipBox />
            <LeadershipBox />
            <LeadershipBox />
          </div>
          <div className="main_right">
            <LeadershipBox />
            <LeadershipBox />
            <LeadershipBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
