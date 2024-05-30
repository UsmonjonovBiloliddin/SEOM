import "./Doses.scss"
const Doses = () => {
  return (
    <div className='Doses'>
        <div className="Doses_boxes">
          <div className="Doses_box">
            <div className="img"><img src="../images/one.png" alt="" /></div>
            <h4>20 793 057</h4>
            <p>Birinchi doza</p>
          </div>
          <div className="Doses_box">
            <div className="img"><img src="../images/two.png" alt="" /></div>
            <h4>20 793 057</h4>
            <p>Ikkinchi doza</p>
          </div>
          <div className="Doses_box">
            <div className="img"><img src="../images/three.png" alt="" /></div>
            <h4>20 793 057</h4>
            <p>Uchinchi doza</p>
          </div>
          <div className="Doses_box">
            <div className="img"><img src="../images/done.png" alt="" /></div>
            <h4>20 793 057</h4>
            <p>Jami emlanganlar</p>
          </div>
        </div>
    </div>
  )
}

export default Doses