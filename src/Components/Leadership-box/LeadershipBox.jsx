import { IoCalendarClearOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./LeadershipBox.scss";
import { Link } from "react-router-dom";
const LeadershipBox = () => {
  const [selected, setSelected] = useState(0);
  const handleAcc = (number) => {
    setSelected(number === selected ? 0 : number);
  };
  return (
    <div className={selected == 0 ? "leadershipBox" : "leadershipBox activebox"}>
      <div className="leadershipBox_top">
        <div className="top_img">
          <img src="../images/Ellipse 9.png" alt="" />
        </div>
        <div className="top_main">
          <p>O’zbekiston respublikasi sog’liqni saqlash vaziri</p>
          <h2>Eshonov Fakhriyor Farxodbek ogli</h2>
          <div className="miniBoxes">
            <div className="miniBox">
              <div className="step">
                <LuPhone className="icon" />
                <p>Telefon raqami</p>
              </div>
              <span>+998 97 628 28 82</span>
            </div>
            <div className="miniBox">
              <div className="step">
                <IoCalendarClearOutline className="icon" />
                <p>Qabul kunlari</p>
              </div>
              <span>Payshanba - 16:00 18:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="leadershipBox_bottom">
        <div className="buttons">
          <div className="anchors">
            <button
              className={selected === 1 ? "active" : ""}
              onClick={() => handleAcc(1)}
            >
              <IoIosArrowDown className="icon" /> Biografik ma’lumotlari
            </button>
            <button
              className={selected === 2 ? "active" : ""}
              onClick={() => handleAcc(2)}
            >
              <IoIosArrowDown className="icon" /> Vakolatida
            </button>
          </div>
          <Link to={"/CentralApparatus"}>
          <button className="enrollment">Qabulga yozilish</button>
          
          </Link>
        </div>
        <div className="accordions">
          <div className={selected == 1 ? "accordion active" : "accordion"}>
            <ul>
              <li>Иқтисод фанлари номзоди.</li>
              <li>Мусаев Беҳзод Анварович 1973 йилда туғилган.</li>
              <li>
                1995 йилда Тошкент давлат иқтисодиёт университетини тамомлаган.
              </li>
              <li>
                2004 йилда Ўзбекистон Республикаси Президенти ҳузуридаги Давлат
                ва жамият қурилиши академияси қошидаги Олий бизнес мактабини
                тамомлаган.
              </li>
              <li>
                Меҳнат фаолиятини 1995 йилда Ўзбекистон Республикаси Ташқи
                иқтисодий фаолият миллий банкида бошлаган.
              </li>
              <li>
                1997-1998 йй. — Ўзбекистон Республикаси Ташқи иқтисодий фаолият
                миллий банки Ҳамза филиали бошқарувчиси.
              </li>
              <li>
                1998-2002 йй. — Ўзбекистон Республикаси Молия вазирлигининг
                ижтимоий соҳани молиялаштириш бош бошқармаси бошлиғи.
              </li>
            </ul>
          </div>
          <div className={selected == 2 ? "accordion active" : "accordion"}>
            <ul className="withCircle">
              <li>Кадрлар бошқармаси</li>
              <li>Биринчи бўлим</li>
              <li>Иккинчи бошқарма</li>
              <li>Комплаенс, ички аудит ва молиявий назорат хизмати</li>
              <li>Юридик бўлим</li>
              <li>Бухгалтерия ҳисоби ва ҳисоботи бошқармаси</li>
              <li>Ташкилий-назорат, девонхона бошқармаси</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipBox;
