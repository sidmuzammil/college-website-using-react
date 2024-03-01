import firstImage from "../../assets/firstgraduate-image.jpg"
import secondImage from "../../assets/secondgratuate-image.jpg"
import thirdImage from "../../assets/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg";
import firstgraduateIcon from "../../assets/edusity_assets/program-icon-1.png"
import SecondgraduateIcon from "../../assets/edusity_assets/program-icon-2.png"
import ThirdgraduateIcon from "../../assets/edusity_assets/program-icon-3.png"

import "./Secondpage.css"


const SectionPage = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={firstImage} alt="" />
            <div className="description">
                <img src={firstgraduateIcon} alt="" />
                <p>Bachelor Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={secondImage} alt="" />
            <div className="description">
                <img src={SecondgraduateIcon} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={thirdImage} alt="" />
            <div className="description">
                <img src={ThirdgraduateIcon} alt="" />
                <p>Post Graduate</p>
            </div>
        </div>

    </div>
  )
}
export default SectionPage