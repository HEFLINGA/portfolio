import React from "react";
import "./testimonials.css";
import IMG1 from "../../assets/prof_img.png";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: IMG1,
    name: "Some Name 1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores incidunt, vitae laborum sequi magnam natus fugit iste. Architecto illum tempore ducimus incidunt laborum officia quia eveniet nobis libero veniam!",
  },
  {
    avatar: IMG1,
    name: "Some Name 2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores incidunt, vitae laborum sequi magnam natus fugit iste. Architecto illum tempore ducimus incidunt laborum officia quia eveniet nobis libero veniam!",
  },
  {
    avatar: IMG1,
    name: "Some Name 3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores incidunt, vitae laborum sequi magnam natus fugit iste. Architecto illum tempore ducimus incidunt laborum officia quia eveniet nobis libero veniam!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
