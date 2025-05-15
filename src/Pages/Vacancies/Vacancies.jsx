import { CiCalendarDate } from "react-icons/ci";
import "./Vacancies.scss";
import { Title } from "../../Components";

const Vacancies = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
      <Title
        inside={"Tashkilot haqida"}
        location={"Bosh ish o'rinlari"}
        title={"Bosh ish o’rinlari"}
      />
      <div className="Vacancies">
        <div className="items">
         
        <div className="item">
            <div className="info">
              <div className="info_name">
                <p>Nomi</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Tashkilot</p>
              </div>
              <div className="info_body">
                <p>Sanitariya-epidemiologik osoyishtalik markazi</p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bo’lim</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Chop etilgan sana</p>
              </div>
              <div className="info_body">
                <span>
                  {" "}
                  <CiCalendarDate />
                  2022 - 07 - 01
                </span>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Mutahassislik</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bog’lanish</p>
              </div>
              <div className="info_body">
               <button>Rezyume yuborish</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <div className="info_name">
                <p>Nomi</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Tashkilot</p>
              </div>
              <div className="info_body">
                <p>Sanitariya-epidemiologik osoyishtalik markazi</p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bo’lim</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Chop etilgan sana</p>
              </div>
              <div className="info_body">
                <span>
                  {" "}
                  <CiCalendarDate />
                  2022 - 07 - 01
                </span>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Mutahassislik</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bog’lanish</p>
              </div>
              <div className="info_body">
               <button>Rezyume yuborish</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <div className="info_name">
                <p>Nomi</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Tashkilot</p>
              </div>
              <div className="info_body">
                <p>Sanitariya-epidemiologik osoyishtalik markazi</p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bo’lim</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Chop etilgan sana</p>
              </div>
              <div className="info_body">
                <span>
                  {" "}
                  <CiCalendarDate />
                  2022 - 07 - 01
                </span>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Mutahassislik</p>
              </div>
              <div className="info_body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
            <div className="info">
              <div className="info_name">
                <p>Bog’lanish</p>
              </div>
              <div className="info_body">
               <button>Rezyume yuborish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
