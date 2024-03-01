import "./Hero.css"
import ArrowIcon from "../../assets/edusity_assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="Hero">
        <div className="hero-text container">
            <h1> Explore the Infinite Possibilities </h1>
            <p>Welcome to Education arts and science, where endless opportunities await. Step into a world of innovation, exploration, and growth. With a focus on excellence and a dedication to student success</p>
            <button className="btn">explore more <img src={ArrowIcon} alt="" /></button>
        </div>
    </div>
  )
}
export default Hero