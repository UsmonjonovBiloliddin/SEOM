import "./Background.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround, SearchBackround, SignBackraund } from "../../../Slice/BackraundSlice";
const Background = () => {
  const {  Manuopen , Searchopen  } = useSelector((state) => state.background);
  const dispatch = useDispatch();

  const closeBack = () => {
    if (Manuopen) {
      dispatch(NavManuBackround());
    }
    if (Searchopen) {
      dispatch(SearchBackround());
    }
  };
  return (
    <>
      <div
        onClick={() => closeBack()}
        className={ Searchopen ||  Manuopen ? "Background active" : "Background"}
      ></div>
    </>
  );
};

export default Background;
