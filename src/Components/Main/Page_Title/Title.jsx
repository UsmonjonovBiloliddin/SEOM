import { FaAngleRight } from "react-icons/fa";
import "./Title.scss";
const Title = ({inside , location , title}) => {
  return (
    <div className="Title">
      <h3>
      {inside}
        <span>
          <FaAngleRight />
          {location}
        </span>
      </h3>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
