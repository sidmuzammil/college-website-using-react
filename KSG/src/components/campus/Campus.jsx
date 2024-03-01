import firstCampusImage from "../../assets/campus/john-kon-garang-4gD-zpzW6Ds-unsplash.jpg"
import secondCampusImage from "../../assets/campus/second-campus-image.jpg"
import ThirdCampusImage from "../../assets/campus/third-campus-image.jpg"
import fourthCampusImage from "../../assets/campus/fourth-campus-image.jpg"
import "./Campus.css"
import whiteArrow from "../../assets/edusity_assets/white-arrow.png"
const Campus = () => {
  return (
    <div className="Campus">
        <div className="gallery">
            <img src={firstCampusImage} alt="" />
            <img src={secondCampusImage} alt="" />
            <img src={ThirdCampusImage} alt="" />
            <img src={fourthCampusImage} alt="" />
        </div>
       <button className="btn dark-btn">see more<img src={whiteArrow} alt="" /></button>
    </div>
  )
}
export default Campus