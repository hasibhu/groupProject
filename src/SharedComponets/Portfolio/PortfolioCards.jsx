import "./Portfolio.css";

const PortfolioCards = () => {
// <<<<<<< HEAD
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-5'>
            <div className="portfolio-card ">
                <div className="shadow-sm relative hover:bg-opacity-65 ">
                   <figure>
                    
                   <img
                            src="https://i.ibb.co/3ySx0kr/marques-thomas-h-O5s1n-SEMSc-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                   
                   </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.amazon.com"
                            className="btn hover:bg-[#D01D3F] rounded-full bg-[#E43C5C] hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/9ydXy8g/brett-jordan-0-Fytazj-Hhxs-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                   
                  </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.reddit.com/"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/q0k9cMW/christian-wiediger-Nm-Gz-VG5-Wsg8-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px]   rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.youtube.com"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/j8p43SW/solen-feyissa-iur-EAy-Yy-U-c-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px]  rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.facebook.com"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/PY8KshZ/jaimie-harmsen-z-J9-IMLp-X8w-Q-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.yahoo.com/"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/ySTtkgk/oberon-copeland-veryinformed-com-Et-Cx-Iua-G-z-U-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.wikipedia.org/"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/CbDFLZc/solen-feyissa-KWZa42a1kds-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://www.instagram.com/"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/DVDqRPy/alexander-shatov-k1xf2-D7j-WUs-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://x.com/?lang=en&mx=2"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
                            src="https://i.ibb.co/cxWDcFs/souvik-banerjee-JLj-Nbvl-DDo-unsplash.jpg"
                            alt="Shoes"
                            className='h-72 w-[450px] rounded-2xl'
                        />
                    </figure>
                    <div className="card-actions z-10 items-center justify-center absolute flex inset-0">
                       
                        <a
                            href="https://bd.linkedin.com/"
                            className="btn hover:bg-[#D01D3F] bg-[#E43C5C] rounded-full hidden-on-hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
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
