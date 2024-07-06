import logo from '../../assets/logoB.png'
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F8FBFC]">
      <div className="max-w-[1440px] m-auto">

        <footer className="footer  text-black py-10 px-3 ">
          <aside>
         
         <img className='h-16 w-28'  src={logo} alt="" />
        
            <p>
              Banani,Dhaka
            </p>
            <p className="text-lg">Discover a curated portfolio of websites and easily <br />
              purchase your next digital project.</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Our Services</a>
            <a className="link link-hover">Any Query</a>
            <a className="link link-hover">Portfolio</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Team</a>

          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-center">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a className='text-3xl'>
              <FaXTwitter />
              </a>
              <a className='text-4xl'>
              <CiFacebook />
              </a>
              <a className='text-4xl'>
              <CiLinkedin />
              </a>
              <a className='text-4xl'>
              <FaDribbble />
              </a>
              
            </div>
          </nav>

        </footer>
        <footer className="footer footer-center bg-[#F8FBFC] text-black p-4">
          <aside>
            <p>Copyright © CodeLab- All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>


      </div>
    </div>
  );
};

export default Footer;
