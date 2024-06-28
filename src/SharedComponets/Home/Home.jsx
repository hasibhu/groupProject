
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Portfolio from '../Portfolio/Portfolio';
import ContactUs from '../ContactUs/ContactUs';
import CallToAction from '../CallToAction/CallToAction';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>
            <Portfolio></Portfolio>
            <Pricing></Pricing>
            <FAQ></FAQ>
            <Team></Team>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;