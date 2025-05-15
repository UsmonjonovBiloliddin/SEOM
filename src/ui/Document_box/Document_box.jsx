import "./Document_box.scss";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
const Document_box = () => {
  return (
        <Link to={"/Documents_inside"}>
        <div className="Documents_box">
          <div className="radio">
            <IoDocumentTextOutline />
          </div>
          <h4>Loem Ipsum text of the printing </h4>
          <p>09/08/2022 </p>
        </div>
      </Link>
  );
};

export default Document_box;
