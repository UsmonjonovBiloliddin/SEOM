import { Link } from "react-router-dom"
import "./Header.scss"
const Header = () => {
  return (
    <div className='Header'>
        <div className="Header_text">
            <h2>Toshkent shaxar</h2>
            <h1>Sanitariya-epidemiologik osoyishtalik markazi</h1>
            <Link to={"AboutUs"}><button>Tashkilot haqida</button></Link>
        </div>
    </div>
  )
}

export default Header