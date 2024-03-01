
import "./About.css"
import AboutImage from "../../assets/edusity_assets/about.png"
import Playicon from "../../assets/edusity_assets/play-icon.png"
const About = () => {
  return (
    <div className="About">
        <div className="about-left">
            <img src={AboutImage} alt="" className="about-image"/>
            <img src={Playicon} alt="" className="play-icon"/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR COLLEGE</h3>
            <h2>Where knowledge meets opportunity, and innovation shapes futures.</h2>
            <p>Education arts and science is a dynamic hub of academic excellence and innovation. With state-of-the-art facilities and hands-on learning experiences, we empower individuals to become tomorrow's leaders</p>
            <p>At Education arts and science, we foster a supportive community where students from all backgrounds come together to learn and grow. students develop the skills and knowledge needed to tackle real-world challenges. Our inclusive environment encourages collaboration, critical thinking, and personal development.</p>
            <p>Beyond academics, Education arts and science  offers a vibrant campus life filled with opportunities for socialization and enrichment. . Join us at Education arts and science college and embark on a journey of discovery, growth, and lifelong connections.</p>
        </div>
    </div>
  )
}
export default About