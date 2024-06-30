// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from './../../CustomComponent/SectionTitle';

const Team = () => {
  const title = 'Team';
  const subtilte = 'Our Hardworking Team'
  const description = 'Step into our project gallery where each piece of work reflects our dedication and skill in coding.  From sleek websites to complex applications, CodingLab’s projects'
  return (
    <div className="max-w-[1440px] m-auto py-10">
      <div>
        <div className="flex justify-center mb-7">
          <div className="flex flex-col justify-center items-center ">
          <SectionTitle title={title} subtitle={subtilte} description={description} designAmount={1} ></SectionTitle>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
              // when window width is >= 1440px
              1440: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Tempo/assets/img/team/team-1.jpg"
                    alt="team"
                  />
                  <div className="border-b flex gap-3 justify-center p-2 absolute bottom-0 w-full bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-90">
                    <a href="#">a</a>
                    <a href="#">a</a>
                    <a href="#">a</a>
                  </div>
                </div>
                <div className="text-center p-5">
                  <h1 className="text-[#444444] font-semibold text-[20px]">
                    Walter White
                  </h1>
                  <p className="text-[#AAAAAA]">Chief Executive Officer</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Repeat SwiperSlide as needed */}
          </Swiper>
          <div className="custom-pagination mt-5 flex gap-[7px] justify-center"></div>
        </div>
      </div>
    </div>
  );
};


export default Team;

