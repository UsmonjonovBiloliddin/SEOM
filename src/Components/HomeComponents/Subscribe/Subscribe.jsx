import "./Subscribe.scss";
const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="Subscribe_text">
        <div className="left">
        <h2>Obuna bo’lish</h2>
        <p>Tashkilot haqidagi yangiliklarga obuna bo’ling!</p>

        <form action="">
          <input type="text" placeholder="Elektron pochtangiz" />
          <button>Yuborish</button>
        </form>
        </div>
        <div className="img">
          <img src="../images/doctor.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
