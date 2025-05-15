import { FaArrowRightLong } from "react-icons/fa6"
import "./Documents.scss"
import { Link } from "react-router-dom"
import { Documents_boxes } from "../.."
const Documents = () => {
  return (
    <div className="Documents">
        <div className="Documents_text">
            <h1>Xujjatlar</h1>
            <Link to={"/Documents"}><button>Batafsil <FaArrowRightLong /></button></Link>
        </div>
            <Documents_boxes/>
    </div>
  )
}

export default Documents