import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import "./Navbar_button.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchBackround } from "../../../../Slice/BackraundSlice";
const Navbar_button = () => {
  const dispatch = useDispatch()

  const Opensearch = () => {
    dispatch(SearchBackround())
  }

  const [openselect , setOpenSelect] = useState(0);
  const open =  (num) => {
    if(num == openselect){
      setOpenSelect(0)
    }else{
      setOpenSelect(num);
    }
  }
  return (
    <div className="Navbar_button">
      <div className="Selects">
        <div  className={openselect == 1 ? "select active" : "select"}>
          <button onClick={() => open(1)}>  <IoIosArrowDown /> Tashkilot haqida</button>
          <div className={openselect == 1 ?  "text active" : "text"}>
            <div className="item"><Link onClick={() => open(0)} to={"/AboutUs"}>Biz haqimizda</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Vacancies"}>Bosh ish o’rinlari</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Administrations"}>Xududiy boshqarmalar</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Ministries"}>Vazirlik vazifalari va funksialari</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/LeaderShip"}>Raxbariyat</Link></div>
          </div>
        </div>
        <div  className={openselect == 2 ? "select active" : "select"}>
          <button onClick={() => open(2)}>  <IoIosArrowDown /> Hujjatlar</button>
          <div className={openselect == 2 ?  "text active" : "text"}>
            <div className="item"><Link onClick={() => open(0)} to={"/AboutUs"}>Biz haqimizda</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Vacancies"}>Bosh ish o’rinlari</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Administrations"}>Xududiy boshqarmalar</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Structure"}>Tarkiyib tuzilma</Link></div>
          </div>
        </div>
        <div className={openselect == 3  ? "select active" : "select"}>
          <button onClick={() => open(3)}>  <IoIosArrowDown /> Rahbariyat</button>
          <div className={openselect == 3 ?  "text active" : "text"}>
            <div className="item"><Link onClick={() => open(0)} to={"/AboutUs"}>Biz haqimizda</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Vacancies"}>Bosh ish o’rinlari</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Administrations"}>Xududiy boshqarmalar</Link></div>
            <div className="item"><Link onClick={() => open(0)} to={"/Ministries"}>Vazirlik vazifalari va funksialari</Link></div>
          </div>
        </div>
        <div className="select">
          <Link to={"/News"}><button className="noselect"> Matbuot xizmatlari</button></Link>
        </div>
        <div className="select">
         <Link to={"/ContactUs"}><button className="noselect">Bog’lanish</button></Link>
        </div>
      </div>
      <div className="Search">
      <IoIosSearch onClick={() => Opensearch()} />
      </div>
    </div>
  );
};

export default Navbar_button;
