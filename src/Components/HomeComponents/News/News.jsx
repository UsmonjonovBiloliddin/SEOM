import "./News.scss";
import "swiper/css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const Yangiliklar = () => {
  return (
    <div className="Yangiliklar">
      <div className="Yangiliklar_text">
        <h1>Yangiliklar</h1>
        <button>
          Barcha yangiliklar <FaArrowRightLong />
        </button>
      </div>
      <div className="Yangiliklar_Swiper">
        <div className="swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={60}
            autoplay={{ delay: 4000 }}
            loop={true}
            slidesPerView={3}
            navigation={{ nextEl: ".button_next", prevEl: ".button_close" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              900: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperSlide">
                <img src="/public/images/Yangiliklarimg.png" alt="" />
                <p>
                  {" "}
                  <CiCalendarDate />
                  25.08.2022
                </p>
                <h5>“ENDOKRINOLOGIK KASALLIKLARNI OLDINI OLISHDA KO‘RI...</h5>
                <Link>
                  Batafsil <FaArrowRightLong />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Yangiliklar_swiper_buttons">
          <div className="swiper_buttons_button button_close">
            <IoIosArrowBack />
          </div>
          <div className="swiper_buttons_button button_next">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yangiliklar;
