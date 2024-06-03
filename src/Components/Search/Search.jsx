import { CiCalendarDate } from "react-icons/ci";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchBackround } from "../../Slice/BackraundSlice";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Search = () => {
  const state = useSelector((state) => state.background);
  const dispatch = useDispatch();
  const closeBack = () => {
    dispatch(SearchBackround());
  };
  return (
    <div className={state.Searchopen ? "Search_Data active" : "Search_Data"}>
      <div className="close">
        <IoCloseSharp onClick={() => closeBack()} />
      </div>
      <h1>Qidiruv</h1>
      <div className="searchForm">
        <form action="">
          <div className="input">
            <input type="text" placeholder="Prezident qarorlari" />
            <IoIosSearch />
          </div>
          <button>Qidirish</button>
        </form>
      </div>
      <div className="SearchData">
        <p>
          Topildi: <span>14 ta</span>
        </p>
        <div className="items">
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>

          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
          <div className="item">
            <span>
              <CiCalendarDate />
              25.08.2022
            </span>
            <h3>
              Ўзбекистон Республикасида тиббий-ижтимоий хизматлар тизими
              такомиллаштирили…
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
