import "./References.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Link } from "react-router-dom";
const References = () => {
  return (
    <div className="References">
      <div className="Reference_Swiper">
        <div className="Reference_text">
          <h1>Foydali xavolalar</h1>
          <div className="Reference_swiper_buttons">
            <div className="swiper_buttons_button button_close">
              <IoIosArrowBack />
            </div>
            <div className="swiper_buttons_button button_next">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={40}
            autoplay={{ delay: 4000 }}
            loop={true}
            slidesPerView={3}
            navigation={{ nextEl: ".button_next", prevEl: ".button_close" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
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
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <Link to={"/"}>
                <div>
                  <img src="../images/gerb.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <div>
                  <img src="../images/nishon.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <div>
                  {" "}
                  <img src="../images/gerb.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <div>
                  {" "}
                  <img src="../images/nishon.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <div>
                  {" "}
                  <img src="../images/gerb.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <div>
                  <img src="../images/nishon.png" alt="" />
                  <p>
                    Loem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default References;
