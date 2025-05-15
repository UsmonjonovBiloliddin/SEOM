import { Title } from "../../Components"
import { AboutUsContact, AboutUsInfo } from "../../Components";
import "./AboutUs.scss"
const AboutUs = () => {
  document.documentElement.scrollTop = 0;
  return (
    <div className="AboutUs">
        <Title inside={"Tashkilot haqida"} location={"Sanitariya-epidemiologik osoyishtalik markazi"} />
        <AboutUsInfo/>
        <AboutUsContact/>
    </div>
  )
}

export default AboutUs