import Logo from "../../assets/education-high-resolution-logo-white-transparent.png"
import {useState,useEffect} from "react"
import "./Nav.css"
const Nav = () => {
  const [valid, setValid] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      window.scrollY < 50 ? setValid(false) : setValid(true)
    })
  }, [])
  
  return (
    <nav className={`container ${valid ? "dark-nav" :""}`}>
        <img src={Logo} alt=""  className="logo"/>
        <ul>
            <li>Home</li>
            <li>Programe</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className="btn">Contact us</button></li>
        </ul>
    </nav>
  )
}
export default Nav