import "./Portfolio.css";
import img1 from '../../assets/portfolio/a1614500-e03f-11eb-986a-30f6f0d4f1cc.png'
import img2 from '../../assets/portfolio/download (1).jpeg'
import img3 from '../../assets/portfolio/download.jpeg'
import img4 from '../../assets/portfolio/images (1).jpeg'
import img5 from '../../assets/portfolio/images (2).jpeg'
import img6 from '../../assets/portfolio/images (3).jpeg'
import img7 from '../../assets/portfolio/images.jpeg'
import img8 from '../../assets/portfolio/images.png'
import img9 from '../../assets/portfolio/videograph-free-template-353x278.jpg'
const PortfolioCards = () => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="portfolio-card ">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img1}
                            className='h-72 w-full rounded-2xl object-cover'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">

                        <a
                            href="https://www.amazon.com"
                            className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className=" shadow-sm relative hover:bg-opacity-65">
                  <figure>
                     <img
                            src={img2}
                            className='h-72 w-full rounded-2xl object-cover'
                        />
                   
                  </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.reddit.com/"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                            
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className=" shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img3}
                            className='h-72 w-full object-cover  rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.youtube.com"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                           
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img4}
                            alt="Shoes"
                            className='h-72 object-cover w-full rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.facebook.com"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                           
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img5}
                            alt="Shoes"
                            className='h-72 w-full object-cover rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.yahoo.com/"
                            className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                            
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img6}
                            alt="Shoes"
                            className='h-72 w-full object-cover rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.wikipedia.org/"
                            className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                            
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img7}
                            alt="Shoes"
                            className='h-72 w-full object-cover rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.instagram.com/"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>                   
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img8}
                            alt="Shoes"
                            className='h-72 w-full object-cover rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://x.com/?lang=en&mx=2"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                           
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-card">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                    <figure>
                        <img
                            src={img9}
                            alt="Shoes"
                            className='h-72 w-full object-cover rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://bd.linkedin.com/"
                             className="btn hover:bg-[#D01D3F] w-16 h-16 text-white hover:border-[#D01D3F] border border-[#E43C5C] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                            
                        </a>
                    </div>
                </div>
            </div>
            {/* =======
  return (
    <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-y-5">
      <div className="portfolio-card">
        <div className="image-full w-96 shadow-sm relative hover:bg-opacity-65 hover:scale-110">
          <figure>
            <img
              src="https://i.ibb.co/3ySx0kr/marques-thomas-h-O5s1n-SEMSc-unsplash.jpg"
              alt="Shoes"
              className="h-72"
            />
          </figure>
          <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
            <a
              href="https://www.amazon.com"
              className="btn bg-[#E43C5C] text-[#FFFFFF] hidden-on-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              Website Link
            </a>
          </div>
>>>>>>> origin/main */}

        </div>

    );
};

export default PortfolioCards;
