import nextImg from "../../assets/edusity_assets/next-icon.png"
import Backicon from "../../assets/edusity_assets/back-icon.png"
import user_1 from "../../assets/edusity_assets/user-1.png"
import user_2 from "../../assets/edusity_assets/user-2.png"
import user_3 from "../../assets/edusity_assets/user-3.png"
import user_4 from "../../assets/edusity_assets/user-4.png"
import "./Testimonials.css"

const Testimonial = () => {
  return (
    <div className="testimonial">
      <img src={nextImg} alt="" className="nxt-btn" />
      <img src={Backicon} alt="" className="Back-btn" />
      <div className="slider">
       <ul>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>william jackson</h3>
                <span>Mickle city london</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi omnis illum voluptatem deleniti inventore, numquam amet iste magni! Atque voluptatum illo neque iste architecto pariatur tenetur adipisci? Autem, minima!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>william jackson</h3>
                <span>Mickle city london</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi omnis illum voluptatem deleniti inventore, numquam amet iste magni! Atque voluptatum illo neque iste architecto pariatur tenetur adipisci? Autem, minima!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>william jackson</h3>
                <span>Mickle city london</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi omnis illum voluptatem deleniti inventore, numquam amet iste magni! Atque voluptatum illo neque iste architecto pariatur tenetur adipisci? Autem, minima!</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>william jackson</h3>
                <span>Mickle city london</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi omnis illum voluptatem deleniti inventore, numquam amet iste magni! Atque voluptatum illo neque iste architecto pariatur tenetur adipisci? Autem, minima!</p>
          </div>
        </li>
        
       </ul>
      </div>
    </div>
  )
}
export default Testimonial