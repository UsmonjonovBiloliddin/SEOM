
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup"

import "./Doses.scss"
const Doses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat birinchi marta animatsiya qilish uchun
  });
  return (
    <div className='Doses'>
        <div className="Doses_boxes" ref={ref}>
          <div className="Doses_box">
            <div className="img"><img src="../images/one.png" alt="" /></div>
            <h4>{inView && <CountUp start={0} end={90705672} duration={3} delay={0}/>}</h4>
            <p>Birinchi doza</p>
          </div>
          <div className="Doses_box" >
            <div className="img"><img src="../images/two.png" alt="" /></div>
            <h4> {inView && <CountUp start={0} end={87565672} duration={3} delay={0}/>}</h4>
            <p>Ikkinchi doza</p>
          </div>
          <div className="Doses_box">
            <div className="img"><img src="../images/three.png" alt="" /></div>
            <h4>{inView && <CountUp start={0} end={75556720} duration={3} delay={0}/>}</h4>
            <p>Uchinchi doza</p>
          </div>
          <div className="Doses_box">
            <div className="img"><img src="../images/done.png" alt="" /></div>
            <h4>{inView && <CountUp start={0} end={60672000} duration={3} delay={0}/>}</h4>
            <p>Jami emlanganlar</p>
          </div>
        </div>
    </div>
  )
}

export default Doses