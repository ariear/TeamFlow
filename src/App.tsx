import Contact from "./components/Contact"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"
import Skill from "./components/Skill"
import Teams from "./components/Teams"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <div>
      <div className="min-h-[97vh] relative" >
        <Nav />
        <div className="bg-[url('/assets/images/sidemain.png')] h-full w-[100vw] lg:w-[800px] xl:w-[1060px] 2xl:w-[70vw] bg-cover bg-center bg-no-repeat absolute lg:top-3 lg:left-3 z-10"></div>
        <div className="bg-[#f5f5ff] h-full w-[60vw] absolute top-3 right-3"></div>
        <HeroSection />
      </div>
      <Teams />
      <Skill />
      <FeatureSection />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
