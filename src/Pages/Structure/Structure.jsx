import { Title } from "../../Components";
import "./Structure.scss"
const Structure = () => {
  document.documentElement.scrollTop = 0;
  return (
    <>
     <Title
        inside={"Tashkilot haqida"}
        location={"Xududiy boshqarmalar"}
        title={"Tarkiyib tuzilma"}
      />
    <div className='Structure'>
            <img src="/public/images/image 5.png" alt="" />
    </div>
    </>
  )
}

export default Structure