import { CiLocationOn } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import "./AboutContact.scss"
const AboutContact = () => {
  return (
    <div className="AboutContact">
      <h2>Biz bilan bog’lanish</h2>
      <div className="Contact">
        <div className="contactUs_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5806263622314!2d71.78182009999999!3d40.383118599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a4e74c1d51%3A0x74f191ca540db19!2siTeach%20Academy!5e0!3m2!1sru!2s!4v1716724516263!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
      </div>
    </div>
  );
};

export default AboutContact;
