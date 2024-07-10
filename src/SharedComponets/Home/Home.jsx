import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Pricing from "../Pricing/Pricing";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Portfolio from "../Portfolio/Portfolio";
import ContactUs from "../ContactUs/ContactUs";
import CallToAction from "../CallToAction/CallToAction";
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import SmoothScroll from "../../SmoothScrooll/SmoothScroll";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="slider">
        <Slider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="call-to-action">
        <CallToAction />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="price">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="footer">
        <Footer />
      </div>

      <div>
        <SmoothScroll></SmoothScroll>
      </div>
    </div>
  );
};

export default Home;
