import { useParams } from "react-router-dom";
import "./Inside.scss";
import { FaAngleRight } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Other from "../../Components/Main/Other/Other";
const Inside = () => {
  document.documentElement.scrollTop = 0;
  const { id } = useParams();
  return (
    <div className="Inside">
      <div className="Inside_left">
        <div className="text">
          <div className="text_location">
            Matbuot xizmatlari
            <p>
              <FaAngleRight /> {id}
            </p>
          </div>
         <div className="text_date">
         <p>
            <CiCalendarDate />
            25.08.2022
          </p>
         </div>
          <h1>
            Sardor Umrzoqov: «Sud organlariga nisbatan aholi e’tirozlari haddan
            ziyod ko‘payib ketgandi»{" "}
          </h1>
          <h4>
            Bugun, 11 avgust kuni prezident administratsiyasi rahbari Sardor
            Umrzoqov tomonidan Oliy sud yangi raisini jamoaga tanishtiruv
            jarayoni bo‘lib o‘tmoqda.
          </h4>
         <div className="img_text">
         <div className="img">
            <img src="https://knowtworthy.com/blog/content/images/2019/02/impossibleMeetings.jpeg" alt="" />
          </div>
          <p>
            Prezident administratsiyasi yangi rahbariyati islohotlarni aynan sud
            tizimidan boshlagani bejiz emas. So‘nggi paytlarda aholi tomonidan
            tizim bo‘yicha shikoyatlar soni keskin ortib ketgani kuzatilmoqda.
          </p>
          <p>
            Bundan oldin Shavkat Mirziyoyev o‘z maslahatchisi Baxtiyor Islomov
            nomzodini Oliy sud raisi lavozimiga, Kozimjon Komilov nomzodini
            Konstitutsiyaviy sud sudyasi lavozimiga ko‘rsatib, Senatga
            taqdimnomalar kiritgandi.
          </p>
          <p>
            10 avgust kuni video-konferens-aloqa tarzida bo‘lib o‘tgan Oliy
            Majlis Senatining o‘ttizinchi yalpi majlisida prezident Shavkat
            Mirziyoyev tomonidan taqdim qilingan nomzodlar lavozimga
            tasdiqlandi.
          </p>
          <p>
            Baxtiyor Islomov bungacha prezidentning huquqni muhofaza qiluvchi va
            nazorat organlari faoliyatini muvofiqlashtirish masalalari bo‘yicha
            maslahatchisi sifatida ishlab kelayotgandi.
          </p>
         </div>
        </div>
      </div>
      <div className="Inside_right">
        <Other/>
      </div>
    </div>
  );
};

export default Inside;
