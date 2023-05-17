import NavigationBar from "../components/NavigationBar"
import Mobil from "../components/Mobil"
import OurServices from "../components/OurServices"
import WhyUs from "../components/WhyUs"
import Testimonial from "../components/Testimoni"
import Banner from "../components/Banner"
import Faq from "../components/Faq"
import Footer from "../components/Footer"

const LandingPage = () => {
    return (
        <>
    <div>
      <NavigationBar/>
    </div>
    <div>
      <Mobil/>
    </div>
    <div>
      <OurServices/>
    </div>
    <div>
      <WhyUs/>
    </div>
    <div>
      <Testimonial/>
    </div>
    <div>
      <Banner/>
    </div>
    <div>
      <Faq/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
    )
}

export default LandingPage