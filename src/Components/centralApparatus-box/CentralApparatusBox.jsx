import { IoCalendarClearOutline } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"
import "./CentralApparatusBox.scss"
import { HiOutlineEnvelope } from "react-icons/hi2"

const CentralApparatusBox = () => {
  return (
    <div className="centralApparatusBox">
      <div className="centralApparatusBox_top">
        <div className="top_img">
          <img src="/images/Ellipse 9.png" alt="" />
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
                <HiOutlineEnvelope className="icon" />
                <p>Elektron pochta</p>
              </div>
              <span>d.sh.muzaffarov@ssv.uz</span>
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
    </div>
  )
}

export default CentralApparatusBox
