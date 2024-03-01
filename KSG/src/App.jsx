import About from "./components/About/About"
import Hero from "./components/Herosection/Hero"
import Nav from "./components/Navigation/Nav"
import Testimonial from "./components/Textimonials/Testimonial"
import Title from "./components/Title"
import Campus from "./components/campus/Campus"
import SectionPage from "./components/secondsection/SectionPage"

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <div className="container">
        <Title description={"our program"} title={"what we offer"}/>
        <SectionPage/>
        <About/>
        <Title description={"Gallery"} title={"Campus photos"}/>
        <Campus/>
        <Title description={"textimonials"} title={"Whats students says"}/>
        <Testimonial/>
      </div>
    </div>
  )
}
export default App







