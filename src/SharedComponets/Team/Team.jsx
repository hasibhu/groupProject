import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Team = () => {
  return (
    <div className="max-w-[1440px] m-auto py-10">
      <div>
        <div className="flex justify-center mb-7">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="bg-[#FDEFF2] text-[#E43C5C] text-[16px] font-semibold py-1 px-5 rounded-full">
              TEAM
            </h1>
            <h2 className="text-[#444444] text-[40px] font-semibold">
              Our Hardworking <span className="text-[#E43C5C]">Team</span>
            </h2>
            <p className="max-w-[600px] text-center">
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
              <div className="border rounded-lg overflow-hidden">
                <div className="relative group">
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
          <div className="custom-pagination mt-5 flex gap-2 justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;

