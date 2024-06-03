import "./CentralApparatus.scss"
import LeadershipBox from "../../Components/centralApparatus-box/CentralApparatusBox"
import { Title } from "../../App"

const CentralApparatus = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
     <Title
        inside={"Raxbariyat"}
        location={" Markaziy aparat"}
        title={"Markaziy aparat"}
      />
      <div className="centralApparatus">
      <div className="centralApparatus_main">
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
  )
}

export default CentralApparatus
