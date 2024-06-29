import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SliderCart from "./SliderCart";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";

const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCart
            bg={slider1}
            title={"Master Coding with Ease"}
            subTitle={"Comprehensive Tutorials for Every Skill Level"}
            description={
              "Dive into a vast library of coding tutorials designed for beginners, intermediates, and advanced programmers. Our step-by-step guides and hands-on projects will help you master programming languages, tools, and techniques efficiently."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCart
            bg={slider2}
            title={"Your Coding Journey Starts Here"}
            subTitle={"Interactive Learning for Aspiring Developers"}
            description={
              "Start your coding adventure with our interactive lessons and real-world projects. Whether you're a complete beginner or looking to enhance your skills, our platform provides the resources and support you need to succeed."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCart
            bg={slider3}
            title={"Code Smarter, Not Harder"}
            subTitle={"Expert Tips and Tricks for Developers"}
            description={
              "Unlock the secrets to efficient coding with our expert tips, best practices, and advanced techniques. Our in-depth articles and video tutorials will help you write cleaner, faster, and more efficient code, no matter your experience level."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
