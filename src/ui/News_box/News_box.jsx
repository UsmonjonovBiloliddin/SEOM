import { CiCalendarDate } from "react-icons/ci"
import "./News_box.scss"
import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
const News_box = () => {
  return (
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
  )
}

export default News_box