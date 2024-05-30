import { IoIosArrowDown } from "react-icons/io";
import "./Navbar_button.scss";
import { useState } from "react";
const Navbar_button = () => {
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
          <div className="text">
            <div className="item">Biz haqimizda</div>
            <div className="item">Bosh ish o’rinlari</div>
            <div className="item">Xududiy boshqarmalar</div>
            <div className="item">Vazirlik vazifalari va funksialari</div>
          </div>
        </div>
        <div  className={openselect == 2 ? "select active" : "select"}>
          <button onClick={() => open(2)}>  <IoIosArrowDown /> Hujjatlar</button>
          <div className="text">
            <div className="item">Biz haqimizda</div>
            <div className="item">Bosh ish o’rinlari</div>
            <div className="item">Xududiy boshqarmalar</div>
            <div className="item">Vazirlik vazifalari va funksialari</div>
          </div>
        </div>
        <div className={openselect == 3  ? "select active" : "select"}>
          <button onClick={() => open(3)}>  <IoIosArrowDown /> Rahbariyat</button>
          <div className="text">
            <div className="item">Biz haqimizda</div>
            <div className="item">Bosh ish o’rinlari</div>
            <div className="item">Xududiy boshqarmalar</div>
            <div className="item">Vazirlik vazifalari va funksialari</div>
          </div>
        </div>
        <div className="select">
          <button >  Matbuot xizmatlari</button>
        </div>
        <div className="select">
          <button ><IoIosArrowDown /> Bog’lanish</button>
          <div className="text">
            <div className="item">Biz haqimizda</div>
            <div className="item">Bosh ish o’rinlari</div>
            <div className="item">Xududiy boshqarmalar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_button;
