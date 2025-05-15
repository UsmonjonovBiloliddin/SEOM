import { CiLocationOn } from "react-icons/ci"
import { LuPhone } from "react-icons/lu"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { LiaSearchLocationSolid } from "react-icons/lia"
import "./ContactUs.scss"
import { Title } from "../../Components"

const ContactUs = () => {
  document.documentElement.scrollTop = 0;
  return (
  <>
    <Title
        inside={"Raxbariyat"}
        location={" Markaziy aparat"}
        title={"Bog’lanish"}
      />
    <div className="contactUs">
      <div className="contactUs_main">
        <div className="main_left">
          <div className="step">
            <div className="step_left">
              <CiLocationOn />
              Manzil
            </div>
            <p>Farg’ona viloyati, farg’ona shaxar, Boychechak 4</p>
          </div>
          <div className="step">
            <div className="step_left">
              <LuPhone />
              Telefon raqamimiz
            </div>
            <p>+998 97 628 28 82</p>
          </div>
          <div className="step">
            <div className="step_left">
              <HiOutlineEnvelope />
              Elektron pochtamiz
            </div>
            <p>Faksa.the@gmail.com</p>
          </div>
          <div className="step">
            <div className="step_left">
              <LiaSearchLocationSolid />
              Yo’nalishlar
            </div>
            <p>
              Avtobuslar: 84, 100, 151. Mikroavtobuslar: 4, 12, 29. Moljal:
              Bunyodkor stadioni
            </p>
          </div>
        </div>
        <form className="main_right">
          <div className="step">
            <label htmlFor="name">Ism</label>
            <input type="text" id="name" placeholder="(Fakhriyor)" />
          </div>
          <div className="step">
            <label htmlFor="email">Elektron pochta</label>
            <input
              type="email"
              id="email"
              placeholder="(Faksa.the@gmail.com)"
            />
          </div>
          <div className="step">
            <label htmlFor="phone">Telefon raqami</label>
            <input type="tel" id="phone" placeholder="+998" />
          </div>
          <div className="step">
            <label htmlFor="comment">Murojaatingiz</label>
            <textarea
              id="comment"
              placeholder="Murojaatingizni yo’llang"
              rows={4}
            ></textarea>
          </div>
          <button type="submit">Yuborish</button>
        </form>
      </div>
      <div className="contactUs_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5806263622314!2d71.78182009999999!3d40.383118599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1716724516263!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </>
  )
}

export default ContactUs
